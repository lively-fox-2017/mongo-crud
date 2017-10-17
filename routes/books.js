var express = require('express');
var router = express.Router();
var Books = require('../controllers/books')

/* GET home page. */
router.get('/', Books.findAll)
router.post('/', Books.addBooks)
router.delete('/:id', Books.delBooks)
router.put('/:id', Books.updBooks)

module.exports = router;
