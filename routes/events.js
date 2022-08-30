var express = require('express');
var router = express.Router();
const { create, read } = require('../controllers/cityController')

/* GET users listing. */


router.post('/', create);

router.get('/:id', read)


module.exports = router;
