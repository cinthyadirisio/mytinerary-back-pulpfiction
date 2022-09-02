var express = require('express');
var router = express.Router();
const { createItinerary } = require('../controllers/itineraryController')

/* Routes for controllers  */


router.post('/itineraries', createItinerary)



module.exports = router;