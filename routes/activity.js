var express = require('express');
var router = express.Router();
const { createActivity, readById } = require('../controllers/activityController')

/* Routes for controllers  */


router.post('/', createActivity)
router.get('/', readById)



module.exports = router;