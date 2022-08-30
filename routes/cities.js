var express = require('express');
var router = express.Router();
const { create, read, destroy, upDate } = require('../controllers/cityController')

/* Routes for controllers  */
router.post('/', create);
router.get('/:id', read);
router.delete('/:id', destroy)
router.patch('/:id', upDate)


module.exports = router;
