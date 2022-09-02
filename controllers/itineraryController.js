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
}

module.exports = itineraryController