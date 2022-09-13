const { urlencoded } = require('express')
const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    user: {type: mongoose.Types.ObjectId, ref:'users', required: true},
    city: {type: mongoose.Types.ObjectId, ref:'cities' , required: true},
    price: {type: Number, required: true},
    duration: {type: Number, required: true},
    likes: {type: Array, required: true},
    tags: {type: Array, required: true},
    photo: {type: String, required: true},
})

const ITINERARY = mongoose.model(
    'itinerary',
    itinerarySchema

)
module.exports = ITINERARY