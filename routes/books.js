const express = require('express')
const router = express.Router()
const book = require('../controller/booksController')

router.get("/", book.findAll);

router.get("/:id", book.findOne);

router.post("/insert", book.insert);

router.put("/update/:id", book.update);

router.delete("/delete/:id", book.delete);

module.exports = router
