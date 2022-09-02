var express = require('express');
var router = express.Router();
const { createItinerary, upDate, deleteItinerary } = require('../controllers/itineraryController')

/* Routes for controllers  */


router.post('/itineraries', createItinerary)
router.patch('/:id', upDate)
router.delete('/:id', deleteItinerary)


module.exports = router;