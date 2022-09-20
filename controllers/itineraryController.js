const Itinerary = require ('../models/Itinerary')
const Joi = require('joi')


const itineraryValidator = Joi.object({
    "name": Joi.string()
    .required(),
    "user": Joi.string()
    .required(),
    "city": Joi.string()
    .required(),
    "price": Joi.number()
    .integer()
    .messages({
        number: 'Price must be integer',
        "number.integer":'You must enter a valid number'
    })
    .required(),
    "duration": Joi.number()
    .integer()
    .messages({
        "number.integer":'You must enter a valid number'
    })
    .required(),
    "likes": Joi.array()
    .required(),
    "tags": Joi.array()
    .required(),
    "photo": Joi.string()
        .uri()
        .messages({
            'string.uri': 'You must enter a valid URL'
        })
        .required()
})




const itineraryController = {

    createItinerary: async (req, res) => {


        try {

            await itineraryValidator.validateAsync(req.body)
            
            let itineraryCreated = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Itinerary Has Been Created',
                succes: true,
                response: itineraryCreated
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                succes: false
            })
        }

    },
    upDate: async (req, res) => {

        const { id } = req.params

        try {

            const upDateItinerary = req.body

            let itineraryforUpdate = await Itinerary.findOne({ _id: id })

            if (!itineraryforUpdate) {
                res.status(400).json({
                    message: 'Missing Data Error, please review your update request',
                    succes: false
                })

            } else {
                const itineraryUpdated = await Itinerary.findByIdAndUpdate(id, upDateItinerary)
                res.status(200).json({
                    message: itineraryUpdated.name + ': Has Been UpDated',
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
    deleteItinerary: async (req, res) => {

        const { id } = req.params

        try {

            let itinerary = await Itinerary.findOne({ _id: id })

            if (!itinerary) {
                res.status(404).json({
                    message: 'Itinerary Not Found , cannot be Deleted',
                    succes: false
                })
            } else {
                let itineraryDeleted = await Itinerary.findByIdAndDelete(id)
                res.status(200).json({
                    message: itineraryDeleted.name + ': Has Been Deleted',
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
    read: async (req, res) => {

        const { id } = req.params

        try {

            let myitinerary = await Itinerary.findOne({ _id: id })
            .populate('user', {name:1})
            .populate('city', {city:1})

            if (myitinerary) {
                res.status(200).json({
                    message: 'You Get Itinerary',
                    response: myitinerary,
                    succes: true
                })
            } else {
                res.status(404).json({
                    message: 'Itinerary Not Found',
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
    readByCity: async (req, res) => {
        let  myitinerary 
        let query = {}
        if (req.query.city) {
            query.city = req.query.city
        }
        if (req.query.user) {
            query.user = req.query.user
        }
        try {
            if(query.city){
                myitinerary = await Itinerary.find({city: req.query.city})

            }
            if(query.user){
                myitinerary = await Itinerary.find({user: req.query.user}).populate('user', {name:1})

            }

            

            if (myitinerary.length > 0) {
                res.status(200).json({
                    message: 'You Get Itinerary',
                    response: myitinerary,
                    succes: true
                })
            } else {
                res.status(404).json({
                    message: 'Itinerary Not Found',
                    succes: false
                })
            }


        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Cannot read itinerary by ID',
                succes: false
            })
        }

    },
    readByUser: async (req, res) => {

        let myitineraryByUser

        let query = {}

        if (req.query.user) {
            query.user = req.query.user
        }
        try {
            if(query.user){
                myitineraryByUser = await Itinerary.find({user: req.query.user})
            }
            if (myitineraryByUser.length > 0) {
                res.status(200).json({
                    message: 'You Get Itinerary by User',
                    response: myitineraryByUser,
                    succes: true
                })
            } else {
                res.status(404).json({
                    message: 'Itinerary Not Found by User',
                    succes: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Cannot read itinerary by User',
                success: false
            })
        }

    },
    likeDislike: async(req, res) =>{

        let { itineraryID } = req.params

        let {id} = req.user

        try {
            let likedItinerary = await Itinerary.findOne({_id:itineraryID})


            // if(likedItinerary){
            //     if (!likedItinerary.likes.includes(id)){
            //         likedItinerary.likes.push(id)
            //         await likedItinerary.save()
            //         res.status(200).json({
            //             message: 'Itinerary liked',
            //             success: true
            //         })
            //     } else {
            //         likedItinerary.likes.pull(id)
            //         await likedItinerary.save()
            //         res.status(200).json({
            //             message: 'Itinerary disliked',
            //             success: true
            //         })
            //     }
            // } else {
            //     res.status(404).json({
            //         message: 'Itinerary not found',
            //         success: true
            //     })
            // }



            if(likedItinerary && likedItinerary.likes.includes(id)){
                
                likedItinerary.likes.pull(id)
                await likedItinerary.save()
                res.status(200).json({
                    message: 'Itinerary disliked',
                    success: true
                })
            }else if(!likedItinerary.likes.includes(id)){
                likedItinerary.likes.push(id)
                await likedItinerary.save()
                res.status(200).json({
                    message: 'Itinerary liked',
                    success: true
                })
            }else{
                res.status(404).json({
                    message: 'Itinerary not found',
                    success: true
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'error cant be like/dislike',
                success: false
            });
        }
    }

}

module.exports = itineraryController