const City = require('../models/City')
const Joi = require('joi')



const cityValidator = Joi.object({
    "city": Joi.string()
        .messages({
            'string': 'You must enter a valid city.'
        })
        .required(),
    "country": Joi.string()
        .messages({
            'string': 'You must enter a valid country'
        })
        .required(),
    "featuredLocation": Joi.string()
        .messages({
            'string': 'You must enter a valid Location'
        })
        .required(),
    "photo": Joi.string()
        .uri()
        .messages({
            'string.uri': 'You must enter a valid URL'
        })
        .required(),
    "fundation": Joi.date()
        .messages({
            'date': 'You must enter a valid date'
        })
        .required(),
    "description": Joi.string()
        .min(100)
        .max(10000)
        .messages({
            'string.min': 'You must enter a valid description, 100 min characters',
            'string.max': 'You must enter a valid description, 10000 max characters'
        })
        .required(),
    "smalldescription": Joi.string()
        .min(100)
        .max(400)
        .messages({
            'string.min': 'Description must be a hundred characters long minimun',
            'string.max': 'Description must be four hundred characters long maximun'
        })
        .required(),
    "population": Joi.number()
        .min(1000)
        .max(1000000000)
        .messages({
            'number.min': 'You must enter a valid number higher than a thousand and one hundred thousands',
            'number.max': 'You must enter a valid number lower than one hundred thousands'
        })
        .required()
})


const cityController = {

    create: async (req, res) => {



        try {

            await cityValidator.validateAsync(req.body)

            let cityCreated = await new City(req.body).save()

            res.status(201).json({
                message: 'City Has Been Created',
                succes: true,
                response: cityCreated,
                id : cityCreated._id
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                succes: false
            })
        }

    },
    read: async (req, res) => {

        const { id } = req.params

        try {

            let city = await City.findOne({ _id: id })

            if (city) {
                res.status(200).json({
                    message: 'You Get One City',
                    response: city,
                    succes: true
                })
            } else {
                res.status(404).json({
                    message: 'Not Found city',
                    succes: false
                })
            }


        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Catch read',
                succes: false
            })
        }

    },
    upDate: async (req, res) => {

        const { id } = req.params

        try {
            const upDatecity = req.body

            let cityforUpdate = await City.findOne({ _id: id })

            if (!cityforUpdate) {
                res.status(400).json({
                    message: 'Missing Data Error, please review your update request',
                    succes: false
                })

            } else {
                const cityUpdated = await City.findByIdAndUpdate(id, upDatecity)
                res.status(200).json({
                    message: cityUpdated.city + ': City Has Been UpDated',
                    succes: true
                })
            }


        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                succes: false
            })
        }



    },
    destroy: async (req, res) => {

        const { id } = req.params

        try {

            let city = await City.findOne({ _id: id })

            if (!city) {
                res.status(404).json({
                    message: 'city Not Found , cannot be Deleted',
                    succes: false
                })
            } else {
                let cityDeleted = await City.findByIdAndDelete(id)
                res.status(200).json({
                    message: cityDeleted.city + ': City Has Been Deleted',
                    succes: true
                })

            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                succes: false
            })
        }
    },
    all: async (req, res) => {

        let mycities

        let query = {}

        if (req.query.city) {
            query.city = req.query.city
        }

        try {

            if (query.city) {
                mycities = await City.find({ city: { $regex: new RegExp("^" + req.query.city.toLowerCase(), "i") } })
                //response
            } else {
                mycities = await City.find()
            }

            res.status(200).json({
                message: "City Found",
                response: mycities,
                succes: true
            })


        } catch (err) {
            console.log(err)
            res.status(500).json()
        }
    },





}

module.exports = cityController