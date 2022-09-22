var express = require('express');
var router = express.Router();
var passport = require('../config/passport')
const { createComment, readById, deleteComment, upDateComment, readByUser } = require('../controllers/commentsController')

/* Routes for controllers  */


router.post('/', passport.authenticate('jwt', {session:false}), createComment)
router.get('/', readById)
router.get('/commentbyuser',readByUser )
router.patch('/:id',passport.authenticate('jwt', {session:false}), upDateComment)
router.delete('/:id',passport.authenticate('jwt', {session:false}), deleteComment)



module.exports = router;