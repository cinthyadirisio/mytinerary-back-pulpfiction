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
}

module.exports = itineraryController