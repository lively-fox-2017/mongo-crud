const express = require('express')
const router = express.Router()
const Book = require('../controllers/books')

router.get('/', Book.findAll)

router.post('/', Book.create)

router.delete('/:id', Book.delete)

router.put('/:id', Book.update)

module.exports = router;
