const express = require('express')
const router = express.Router()
const book = require('../controller/booksController')

router.get("/", book.findAll);

router.get("/:id", book.findOne);

module.exports = router
