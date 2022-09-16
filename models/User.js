const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    country:{type:String, required: true},
    email:{type:String, required:true},
    pass:[{type:String, required:true}],
    role:{type:String, required:true},
    photo:{type:String, required:true},
    from: [{type:String, require:true}],
    logged: {type:Boolean, required: true},
    verified:{type:Boolean, required: true},
    code: {type:String, required:true}
})

const USERS = mongoose.model(
    'users',
    usersSchema

)
module.exports = USERS