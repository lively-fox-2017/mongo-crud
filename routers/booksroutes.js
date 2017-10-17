const express = require('express')
const router = express.Router()
const Books = require('../controllers/booksCont')

router.get('/books', Books.allbooks)
router.post('/books', Books.createbooks)

module.exports = router
