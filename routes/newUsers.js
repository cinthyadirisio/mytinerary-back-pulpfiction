var express = require('express');
var router = express.Router();
const { signUp, verifyMail } = require('../controllers/userController')

/* Routes for controllers  */


//router.post('/auth', createUser)
router.post('/signup', signUp)



module.exports = router;