const Activity = require ('../models/Activity')


const activityController = {
    createActivity: async (req, res) => {


        try {
            await new Activity(req.body).save()
            res.status(201).json({
                message: 'Activity Has Been Created',
                succes: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'Activity Could Not Be Created',
                succes: false
            })
        }

    },
    readById: async (req, res) => {

        let  myActivity

        let query = {}
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            if(query.itinerary){
                myActivity = await Activity.find({itinerary: req.query.itinerary})

            }
          

            if (myActivity.length > 0) {
                res.status(200).json({
                    message: 'You Get an activity for your itinerary',
                    response: myActivity,
                    succes: true
                })
            } else {
                res.status(404).json({
                    message: 'Activity Not Found',
                    succes: false
                })
            }


        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Cannot read activity by ID',
                succes: false
            })
        }

    }
}

module.exports = activityController