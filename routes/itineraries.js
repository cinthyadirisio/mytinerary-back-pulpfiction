var express = require('express');
var router = express.Router();
const { createItinerary, upDate } = require('../controllers/itineraryController')

/* Routes for controllers  */


router.post('/itineraries', createItinerary)
router.patch('/:id', upDate)



module.exports = router;