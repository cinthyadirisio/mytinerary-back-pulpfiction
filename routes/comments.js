var express = require('express');
var router = express.Router();
const { createComment, readById } = require('../controllers/commentsController')

/* Routes for controllers  */


router.post('/', createComment)
router.get('/', readById)



module.exports = router;