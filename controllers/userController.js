const User = require ('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')


const userController = {
    signUp: async (req,res) =>{
        let { name,photo,email,pass,role,from} = req.body

        try {

            let user = await User.findOne({email})

            if(!user){
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                

                if (from === 'form'){
                    pass = bcryptjs.hashSync(pass,10)
                    user = await new User({name,photo,email,pass :[pass],role,from:[from],logged,verified, code}).save()

                    sendMail(email,code)

                    res.status(201).json({
                        message: "user signed up",
                        success: true
                    }) 
                } else {
                    pass = bcryptjs.hashSync(pass,10)
                    verified = true
                    user = await new User({name,photo,email,pass:[pass],role,from:[from],logged,verified, code}).save()

                    res.status(201).json({
                        message: "user signed up from " + from,
                        success: true
                    }) 

                }

            } else {
                if (user.from.includes(from)){
                    res.status(200).json({
                        message:"user already exist " + from,
                        success : false
                    })

                } else {
                    user.from.push(form)
                    user.verified = true
                    user.pass.push(bcryptjs.hashSync(pass,10))
                    user = await new User({name,photo,email,pass:[pass],role,from:[from],logged,verified, code}).save()
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
    signIp: () =>{},
    signOut: () =>{},// findOneAndUpdate y cambiar logged de true a false


}

module.exports = userController