const City = require('../models/City')


const cityController = {

    create: async(req, res) =>{

        const {city, country, photo, fundation, description, population} = req.body

        try {
           await new City(req.body).save()
           res.status(201).json({
                message: 'City Has Been Created',
                succes: true
           })
        } catch (error) {
            res.status(400).json({
                message: 'Could Not Be Created',
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
                message: '',
                succes: false
            })
        }

    },
    upDate: async (req, res) =>{

        const {id} = req.params

        try {
            const upDatecity = req.body

            const cityUpdated = await City.findByIdAndUpdate(id, upDatecity)
            
            res.status(200).json({
                message:cityUpdated.city + ': City Has Been UpDated',
                succes: true
           })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: '',
                succes: false
            })
        }

        

    },
    destroy: async (req, res) =>{

        const {id} = req.params

        try {
            let cityDeleted = await City.findByIdAndDelete(id)
            console.log(cityDeleted)
            res.status(200).json({
                message: cityDeleted.city + ': City Has Been Deleted',
                succes: true
           })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: '',
                succes: false
            })
        }
    },


}

module.exports = cityController