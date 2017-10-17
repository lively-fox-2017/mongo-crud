const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.post('/', (req, res)=>{
  let insertedData = {
    isbn:req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }
  Book.insert(insertedData).then((result)=>{
    res.status(201).send(result);
  })
})

module.exports = router;
