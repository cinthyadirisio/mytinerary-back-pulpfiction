var express = require('express');
var router = express.Router();
const eventRouter = require('./cities')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json();
});


module.exports = router;
