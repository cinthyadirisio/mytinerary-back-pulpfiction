const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    user: {type: mongoose.Types.ObjectId, ref:'users', required: true},
    itinerary: {type: mongoose.Types.ObjectId, ref:'itinerary', required: true}
})

const COMMENT = mongoose.model(
    'comment',
    commentSchema
)
module.exports = COMMENT