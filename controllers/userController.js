const User = require ('../models/User')

const userController = {
    createUser: async (req, res) => {


        try {
            await new User(req.body).save()
            res.status(201).json({
                message: 'User Has Been Created',
                succes: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'Could Not Be Created',
                succes: false
            })
        }

    },
}

module.exports = userController