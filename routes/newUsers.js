var express = require('express');
var router = express.Router();
const { signUp, userVerify, signIn, signOut } = require('../controllers/userController')

/* Routes for controllers  */


//router.post('/auth', createUser)
router.post('/signup', signUp)
router.get('/verify/:code', userVerify)
router.post('/signin', signIn)
router.post('/signout', signOut)



module.exports = router;