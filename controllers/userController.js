const User = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const userValidator = Joi.object({
    "name": Joi.string().messages({
        'string.empty': 'Please type your name'
    }).required(),
    "lastName": Joi.string().messages({
        'string.empty': 'Please type your last name'
    })
        .required(),
    "country": Joi.string().messages({
        'string.empty': 'Please type your country'
    })
        .required(),
    "email": Joi.string().email().messages({
        'string.empty': 'Please type your email',
        'string.email': 'You must enter a valid email address'
    })

        .required(),
    "pass": Joi.string().alphanum().min(6).messages({
        'string.empty': 'Please type your password',
        'string.alphanum': 'You must enter a password which contains numbers or letters',
        'string.min': 'Your password must be at least 6 characters long'
    }).required(),
    "photo": Joi.string().messages({
        'string.empty': 'Please enter a photo url'
    })
        .uri()
        .messages({
            'string.uri': 'You must enter a valid URL'
        })
        .required(),
    "role": Joi.string().messages({
        'string.empty': 'Please type your Name'
    }).required(),
    "from": Joi.string().required()
})

const userLoginValidator = Joi.object({
    "email": Joi.string()
        .email()
        .required(),
    "pass": Joi.string()
        .required(),
    "from": Joi.string().required()
})


const userController = {

    signUp: async (req, res) => {
        let { name, photo, email, pass, role, from, country, lastName } = req.body
        try {

            await userValidator.validateAsync(req.body)

            let user = await User.findOne({ email })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                pass = bcryptjs.hashSync(pass, 10)
                if (from === 'form') {
                    user = await new User({ name, photo, email, pass: [pass], role, from: [from], logged, verified, code, country, lastName }).save()
                    sendMail(email, code, name)
                    res.status(201).json({
                        message: "user signed up",
                        success: true
                    })
                } else {
                    verified = true
                    user = await new User({ name, photo, email, pass: [pass], role, from: [from], logged, verified, code, country, lastName }).save()
                    res.status(201).json({
                        message: "user signed up from " + from,
                        success: true
                    })
                }
            } else {
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: "user already exist " + from,
                        success: false
                    })
                } else {
                    user.from.push(from)
                    user.verified = true
                    user.pass.push(bcryptjs.hashSync(pass, 10))
                    await user.save()
                    res.status(201).json({
                        message: "user signed up from " + from,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    signIn: async (req, res) => {

        const { email, pass, from } = req.body


        try {


            await userLoginValidator.validateAsync(req.body)

            const user = await User.findOne({ email })
            const token = jwt.sign(
                {
                    id: user._id,
                    role: user.role
                },
                process.env.KEY_JWT,
                { expiresIn: 60 * 60 * 24 })
    
            if (!user) {
                res.status(404).json({
                    message: 'User does not exist, please Sign Up!',
                    success: false
                })
            }
            else if (user.verified) {

                const userPass = user.pass.filter(userpassword => bcryptjs.compareSync(pass, userpassword))

                if (from === "form") {
                    if (userPass.length > 0) {
                        const loginUser = {
                            id: user._id,
                            email: user.email,
                            name: user.name,
                            from: user.from,
                            photo: user.photo,
                            role: user.role,
                            country: user.country
                        }
                        user.logged = true
                        await user.save()

                        res.status(200).json({
                            message: 'Login Success',
                            success: true,
                            response: {
                                user: loginUser,
                                token: token
                            }
                        })
                    } else {
                        
                        res.status(400).json({
                            message: 'Login Failed, please check your email and password',
                            success: false
                        })
                    }
                }
                else {
                    if (userPass.length > 0) {

                        user.logged = true
                        const loginUser = {
                            id: user._id,
                            email: user.email,
                            name: user.name,
                            from: user.from,
                            photo: user.photo,
                            role: user.role,
                            country: user.country
                        }

                        await user.save()
                        res.status(200).json({
                            message: 'Login Success from Google',
                            success: true,
                            response: {
                                 user: loginUser,
                                 token: token 
                                }
                        })
                    } else {
                        res.status(404).json({
                            message: 'Login Failed, please check your password',
                            success: false
                        })
                    }
                }
            }
            else {
                res.status(401).json({
                    message: 'Login Failed, please verify your email',
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    signOut: async (req, res) => {
        const { email } = req.body
        try {
            const user = await User.findOne({ email: email })
            if (user) {
                user.logged = false
                await user.save()
                res.status(200).json({
                    message: 'You were logged out successfully',
                    success: true,
                    response: user.logged
                })
            } else {
                res.status(400).json({
                    message: 'There is no such user logged in',
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "SingOut Error, please..",
                success: false
            })
        }
    },

    userVerify: async (req, res) => {
        const { code } = req.params
        try {
            const user = await User.findOne({ code: code })
            if (user) {
                user.verified = true
                await user.save()
                res.status(200).json({
                    message: 'You Activate your Account successfully',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Email doesn't exist in database",
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "Account mail could not be verified",
                success: false
            })
        }
    },
    signInWithToken:(req, res) => {
        if (req.user!==null) { //passport carga req.user (si tiene éxito)
        res.status(200).json({
        success: true,
        response: {user: req.user}, //cargamos los datos en la respuesta
        message: 'Welcome ' + req.user.name+'!'
        })
        } else {
        res.status(400).json({
        success: false,
        message: 'error'
        })
        }
       }

}

module.exports = userController