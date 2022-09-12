const Itinerary = require ('../models/Itinerary')

const itineraryController = {
    createItinerary: async (req, res) => {


        try {
            await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Itinerary Has Been Created',
                succes: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'Could Not Be Created',
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
                    message: 'city Not Found , cannot be Deleted',
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
                message: '',
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
                succes: false
            })
        }

    },

}

module.exports = itineraryController