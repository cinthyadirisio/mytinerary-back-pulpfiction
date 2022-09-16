var express = require('express');
var router = express.Router();
const { createComment, readById, deleteComment, upDateComment } = require('../controllers/commentsController')

/* Routes for controllers  */


router.post('/', createComment)
router.get('/', readById)
router.patch('/:id', upDateComment)
router.delete('/:id', deleteComment)



module.exports = router;