const MongoClient = require('mongodb').MongoClient
let uri = 'mongodb://localhost:27017/library';
const Model = require('../models/books')

class Book {
  constructor() {

  }

  static findAll(req,res) {
    // console.log('uyuwewev onyetetete ugmumwewew ossas');
    // console.log(Model);
    Model.findBook()
    .then(result => {
      // console.log('sampeeeeeeeeee sini 232342354');
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req,res) {
    // console.log('sampeeeeeeeeee sini 232342354');
    Model.createBook(req.body)
    .then(dataBooks => {
      // console.log('sampeeeeeeeeee sini');
      // res.send(dataBooks)
      res.json({
        msg : "Data Berhasil Di Simpan",
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock,
        data: dataBooks
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static delete(req,res) {
    Model.deleteBook(req.params)
    .then(dataBooks => {
      res.json({
        msg : "Data Berhasil Di Hapus",
        data: dataBooks
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static update(req,res) {
    Model.updateBook(req.params,req.body)
    .then(dataBooks => {
      res.json({
        msg : "Data Berhasil Di Edit",
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock,
        data: dataBooks
      })
    })
    .catch(err => {
      res.sed(err)
    })
  }

}

module.exports = Book;
