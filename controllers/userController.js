const User = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')
const { exists } = require('../models/User')


const userController = {
    signUp: async (req, res) => {
        let { name, photo, email, pass, role, from } = req.body

        try {

            let user = await User.findOne({ email })

            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')


                if (from === 'form') {
                    pass = bcryptjs.hashSync(pass, 10)
                    user = await new User({ name, photo, email, pass: [pass], role, from: [from], logged, verified, code }).save()

                    sendMail(email, code, name, photo)

                    res.status(201).json({
                        message: "user signed up",
                        success: true
                    })
                } else {
                    pass = bcryptjs.hashSync(pass, 10)
                    verified = true
                    user = await new User({ name, photo, email, pass: [pass], role, from: [from], logged, verified, code }).save()

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
                    user.from.push(form)
                    user.verified = true
                    user.pass.push(bcryptjs.hashSync(pass, 10))
                    user = await new User({ name, photo, email, pass: [pass], role, from: [from], logged, verified, code }).save()
                    res.status(201).json({
                        message: "user signed up from " + from,
                        success: true
                    })
                }
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "couldnt signed up",
                success: false
            })


        }
    },
    signIn: async (req, res) => {
        const { email, pass, from } = req.body
        try {


            const user = await User.findOne({ email })


            if (!user) {
                res.status(404).json({
                    message: 'User does not exist, please Sign Up!',
                    success: false
                })
            }

            else if (user.verified) {

                const userPass = user.pass.filter(userpassword => bcryptjs.compareSync(pass, userpassword))

                if (from == "form") {


                    if (userPass.length > 0) {

                        const loginUser = {
                            id: user._id,
                            email: user.email,
                            name: user.name,
                            from: user.from,
                            photo: user.photo
                        }


                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            message: 'Login Success',
                            success: true,
                            response: { user: loginUser }
                        })
                    } else {
                        res.status(400).json({
                            message: 'Login Failed, please check your password',
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
                            photo: user.photo
                        }


                        await user.save()
                        res.status(200).json({
                            message: 'Login Success',
                            success: true,
                            response: { user: loginUser }
                        })

                    } else {
                        res.status(404).json({
                            message: 'Login Failed, please check your email',
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
                message: 'Login Failed',
                success: false
            })
        }
    },

    signOut: () => { },// findOneAndUpdate y cambiar logged de true a false
    userVerify: async (req, res) => {
        const { code } = req.params
        try {
            const user = await User.findOne({ code: code })
            if (user) {
                user.verified = true
                await user.save()
                res.redirect('https://localhost:3000/cities')
            } else {
                res.status(404).json({
                    message: "Email doesn't exist in database",
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "Account couldn't be verified",
                success: false
            })
        }
    }

}

module.exports = userController