var express = require('express');
const passport = require('../config/passport');
var router = express.Router();
const { signUp, userVerify, signIn, signOut } = require('../controllers/userController')

/* Routes for controllers  */

router.post('/signup', signUp)
router.get('/verify/:code', userVerify)
router.post('/signin', signIn)
//router.get('/token', passport.authenticate('jwt', {session:false}), verifyToken)
router.post('/signout', signOut)



module.exports = router;