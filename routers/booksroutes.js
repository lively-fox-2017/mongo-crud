const express = require('express')
const router = express.Router()
const Books = require('../controllers/booksCont')

router.get('/books', Books.allbooks)
router.post('/books', Books.createbooks)
router.put('/books/:id', Books.updateBook)
router.delete('/books/:id', Books.deleteBook)

module.exports = router
