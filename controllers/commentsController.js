const Comment = require ('../models/Comment')

const commentController = {
    createComment: async (req, res) => {

        try {
            await new Comment(req.body).save()
            res.status(201).json({
                message: 'Comment Has Been Created',
                succes: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'Comment Could Not Be Created',
                succes: false
            })
        }

    },
    readById: async (req, res) => {

        let  myComment

        let query = {}
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            if(query.itinerary){
                myComment = await Comment.find({itinerary: req.query.itinerary})

            }
          

            if (myComment.length > 0) {
                res.status(200).json({
                    message: 'You Get a comment for your itinerary',
                    response: myComment,
                    succes: true
                })
            } else {
                res.status(404).json({
                    message: 'Comment Not Found',
                    succes: false
                })
            }


        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Cannot read comment by ID',
                succes: false
            })
        }

    }
}

module.exports = commentController