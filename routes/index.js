var express = require('express');
var router = express.Router();
const eventRouter = require('./events')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json();
});

// Todas las rutas =>            root
//la ruta principal arrancar en /cities / =>  crear | /cities/:id => leer

router.use('/cities',eventRouter)

module.exports = router;
