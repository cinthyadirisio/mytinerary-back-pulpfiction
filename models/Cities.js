const mongoose = require('mongoose')
const citiesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    photo: {type: URL, required: true},
    foundation: {type: Date, required: true},
    description: {type: String, required: true},
    population: {type: Number, required: true},
})

const CITY = mongoose.model(
    'cities',
    citiesSchema

)
module.exports = CITY