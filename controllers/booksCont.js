const objectId = require('mongodb').ObjectId
const MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/library'

let allbooks = (req,res)=>{
  MongoClient.connect(url,function(err,db){
    let collection = db.collection('library')
    if(!err){
      collection.find({}).toArray(function(err,result){
        if(!err){
          res.send(result)
        }else{
          res.send(err)
        }
      })
    }
  })
}

let createbooks = (req, res) => {
  MongoClient.connect(url, function (err, db) {
    let collection = db.collection('library')
    if (!err) {
      collection.insertOne({
        isbn : req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock : req.body.stock
      }, function (err, result) {
        if (!err) {
          res.send(result)
        } else {
          res.send(err)
        }
      })
    }
  })
}

let updateBook = (req, res) => {
  MongoClient.connect(url, function (err, db) {
    let collection = db.collection('library')
    if (!err) {
      collection.updateOne({_id: objectId(req.params.id)}, {
        isbn : req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock : req.body.stock
      }, function (err, result) {
        if (!err) {
          res.send(result)
        } else {
          res.send(err)
        }
      })
    }
  })
}

let deleteBook = (req, res) => {
  MongoClient.connect(url, function (err, db) {
    let collection = db.collection('library')
    if (!err) {
      collection.deleteOne({_id: objectId(req.params.id)}, function (err, result) {
        if (!err) {
          res.send(result)
        } else {
          res.send(err)
        }
      })
    }
  })
}

module.exports = {
  allbooks,
  createbooks,
  updateBook,
  deleteBook
}
