const passport = require('passport')
const passportJWT = require('passport-JWT')

const {KEY_JWT} = process.env
const User = require('../models/User')

passport.use(
    new passportJWT.Strategy(
        {                                 
            jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: KEY_JWT
        }, //returns object jwt_payload (body with data)
        async (jwt_payload, done) =>{

            try {
                let user = await User.findOne({_id:jwt_payload.id})
                if(user){
                    user = {
                        id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                        photo: user.photo,
                        country: user.country
                    }
                    return done(null, user)
                }else{
                    return done(null, false)
                }
            } catch (error) {
                console.log(error)
                return done(error, false)
            }
        }
    )
)
module.exports = passport