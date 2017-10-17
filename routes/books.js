var express = require('express');
var router = express.Router();

var Books = require('../controllers/books')

router.get('/', Books.getAll )

router.post('/', Books.addData)

router.put('/', Books.editData)

router.delete('/', Books.deleteData)


module.exports = router;
