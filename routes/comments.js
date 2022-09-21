var express = require('express');
var router = express.Router();
var passport = require('../config/passport')
const { createComment, readById, deleteComment, upDateComment } = require('../controllers/commentsController')

/* Routes for controllers  */


router.post('/', passport.authenticate('jwt', {session:false}), createComment)
router.get('/', readById)
router.patch('/:id', upDateComment)
router.delete('/:id', deleteComment)



module.exports = router;