const modelBooks = require('../models/books')

class Books {
  constructor() {

  }
  static findAll(req,res){
    modelBooks.findAll()
    .then(rows=>{
      res.send(rows);
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static create(req,res){
    modelBooks.create(req.body)
    .then(rows=>{
      res.send(rows);
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static findOne(req,res){
    modelBooks.findOne()
    .then(rows=>{
      res.send(rows);
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static update(req,res){
    modelBooks.update(req.body,req.params)
    .then(rows=>{
      res.send(rows);
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static delete(req,res){
    modelBooks.delete(req.params)
    .then(rows=>{
      res.send(rows);
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = Books
