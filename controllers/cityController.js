const CITY = require('../models/City')
const City = require('../models/City')


const cityController = {

    create: async(req, res) =>{

        const {city, country, photo, fundation, description, population, smalldescription, featuredLocation} = req.body

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
            
            let cityforUpdate = await City.findOne({_id:id})

            if(!cityforUpdate){
                res.status(400).json({
                    message: 'Missing Data Error, please review your update request',
                    succes: false
                })

            }else{
                const cityUpdated = await City.findByIdAndUpdate(id, upDatecity)
                res.status(200).json({
                    message:cityUpdated.city + ': City Has Been UpDated',
                    succes: true
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
    destroy: async (req, res) =>{

        const {id} = req.params

        try {

            let city = await City.findOne({_id:id})

            if(!city){
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
                message: '',
                succes: false
            })
        }
    },
    readAll: async (req, res) => {
        
        try {
          let  cities = await City.find()

          if(cities){
            res.status(200).json({
                message: ': Cities Found',
                response: cities,
                succes: true
           })

          } else {
            res.status(404).json({
                message: 'Cities Not Found ',
                succes: false
            })
          }
        

        } catch (err) {
            console.log(err)
            res.status(500).json()
        }
    },
    startWith: async (req, res) => {
        
        try {
          let  cities = await City.find()

          if(cities){
            res.status(200).json({
                message: ': Cities Found',
                response: cities,
                succes: true
           })

          } else {
            res.status(404).json({
                message: 'Cities Not Found ',
                succes: false
            })
          }
        

        } catch (err) {
            console.log(err)
            res.status(500).json()
        }
    }


}

module.exports = cityController