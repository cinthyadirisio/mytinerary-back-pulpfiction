var express = require('express');
var router = express.Router();
const { createUser } = require('../controllers/userController')

/* Routes for controllers  */


router.post('/auth', createUser)



module.exports = router;