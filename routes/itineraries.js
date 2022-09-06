var express = require('express');
var router = express.Router();
const { createItinerary, upDate, deleteItinerary, read, readByCity } = require('../controllers/itineraryController')

/* Routes for controllers  */


router.post('/itineraries', createItinerary)
router.patch('/:id', upDate)
router.delete('/:id', deleteItinerary)
router.get('/:id', read);
router.get('/', readByCity);




module.exports = router;