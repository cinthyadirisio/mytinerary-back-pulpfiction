var express = require('express');
var router = express.Router();
const { create, read, destroy, upDate, all } = require('../controllers/cityController')

/* Routes for controllers  */

router.get('/', all);
router.post('/', create);
router.get('/:id', read);
router.delete('/:id', destroy)
router.patch('/editCity/:id', upDate)


module.exports = router;
