const express = require('express');
const router = express.Router();
const Book = require('../controllers/book');

router.post('/', Book.insertData)
router.get('/', Book.getAllData)
router.get('/:key/:value', Book.getDataBy)
router.delete('/:key/:value', Book.deleteBy)
router.put('/:isbn', Book.updateByIsbn)

module.exports = router;
