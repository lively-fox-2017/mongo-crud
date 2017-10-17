const express = require('express');
const router = express.Router()
const Book = require('../controller/book')

router.post('/', Book.Create)

router.get('/', Book.Read)

router.put('/:id', Book.Update)

router.delete('/:id', Book.Delete)

module.exports = router;