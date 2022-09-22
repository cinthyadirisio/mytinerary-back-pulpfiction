var express = require('express');
var router = express.Router();
var passport = require('../config/passport')

const { createItinerary, 
    upDate, 
    deleteItinerary, 
    read, 
    readByCity,
    likeDislike, 
    readByAdmin} = require('../controllers/itineraryController')


router.post('/itineraries', createItinerary)
router.patch('/:id', upDate)
router.delete('/:id', deleteItinerary)
router.get('/search/:id', read);
router.get('/', readByCity);
router.patch('/likes/:itineraryID', passport.authenticate('jwt', {session:false}), likeDislike)
router.get('/alltineraries', passport.authenticate('jwt', {session:false}), readByAdmin)


module.exports = router;