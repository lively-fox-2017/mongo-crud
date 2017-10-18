const model = require('../models/index')

class Library {

  static getData(req, res){
    model(function(db){
      db.collection('colbooks').find().toArray(function(err, result){
        res.send(result)
      })
    })
  }

  static saveData(req, res){
    model(function(db){
      db.collection('colbooks').insert({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      })
    })
  }

  static updateData(req, res){
    model(function(db){
      db.collection('colbooks').updateOne({
        isbn: req.params.isbn
      },{
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, function(err, result){
        if(err) res.status(200).send(err)
        res.send('UPDATED!')
      })
    })
  }

  static deleteData(req, res){
    model(function(db){
      db.collection('colbooks').remove({
        isbn: req.params.isbn
      })
    })
  }

}

module.exports = Library
