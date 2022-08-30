const City = require('../models/City')


const cityController = {

    create: async(req, res) =>{

        const {city, country, photo, fundation, description, population} = req.body

        try {
           await new City(req.body).save()
           res.status(201).json({
                message: 'event created',
                succes: true
           })
        } catch (error) {
            res.status(400).json({
                message: 'could not created',
                succes: false
            })
        }

    },
    read: async (req, res) =>{
        const {id} = req.params
        try {

           let city = await City.findOne({_id:id})

           if (city){
            res.status(200).json({
                message: 'You get one event',
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
                message: '',
                succes: false
            })
        }

    },
    upDate: async (req, res) =>{

    },
    destroy: async (req, res) =>{

    },


}

module.exports = cityController