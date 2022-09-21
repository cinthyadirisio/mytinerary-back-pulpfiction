var express = require('express');
const passport = require('../config/passport');
var router = express.Router();
const { signUp, userVerify, signIn, signOut,signInWithToken } = require('../controllers/userController')

/* Routes for controllers  */

router.post('/signup', signUp)
router.get('/verify/:code', userVerify)
router.get('/token', passport.authenticate('jwt', {session:false}), signInWithToken)
router.post('/signin',signIn)
router.post('/signout', signOut)



module.exports = router;