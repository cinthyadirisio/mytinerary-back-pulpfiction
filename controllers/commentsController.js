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

    },
    deleteComment: async (req, res) => {

        const { id } = req.params

        try {

            let myComment = await Comment.findOne({ _id: id })

            if (!myComment) {
                res.status(404).json({
                    message: 'Comment Not Found , cannot be Deleted',
                    succes: false
                })
            } else {
                let myCommentDeleted = await Comment.findByIdAndDelete(id)
                res.status(200).json({
                    message: 'Comment Has Been Deleted',
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
    upDateComment: async (req, res) => {

        const { id } = req.params

        try {

            const upDateComment = req.body

            let commentforUpdate = await Comment.findOne({ _id: id })

            if (!commentforUpdate) {
                res.status(400).json({
                    message: 'Missing Data Error, please review your update request',
                    succes: false
                })

            } else {
                const commentUpdated = await Comment.findByIdAndUpdate(id, upDateComment)
                res.status(200).json({
                    message: 'Your Comment Has Been UpDated',
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



    }


}

module.exports = commentController