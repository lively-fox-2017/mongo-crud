var Model = require('../models/books')

class Books {
  static findAll(req,res){
    Model.findBooks()
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static addBooks(req,res){
    Model.createBooks(req.body)
    .then(books=>{
      res.send({
        "Message": "Data Berhasil di Tambah",
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      })
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static delBooks(req,res){
    Model.deleteBooks(req.params)
    .then(books=>{
      res.send({
        "message": "Data Berhasil dihapus",
        _id: req.params.id,
      })
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static updBooks(req,res){
    Model.updateBooks(req.params,req.body)
    .then(books=>{
      res.send({
        "Message": "Data berhasil di Update",
        "isbn": req.body.isbn,
        "title": req.body.title,
        "author": req.body.author,
        "category": req.body.category,
        "stock": req.body.stock
      })
    })
    .catch(err=>{
      res.send(err)
    })
  }

}

module.exports = Books
