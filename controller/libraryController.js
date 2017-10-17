var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/belajarMongoDB';

module.exports = {
  all: (req, res) => {
    MongoClient.connect(url, (err, dbLibrary) => {
      var collection = dbLibrary.collection('books')
      collection.find({}).toArray((err, dataBooks) => {
        if (err) {
          res.send(err)
        } else {
          res.send(dataBooks)
        }
      })
    })
  },
  create: (req, res) => {
    MongoClient.connect(url, (err, dbLibrary) => {
      var collection = dbLibrary.collection('books')
        collection.insertOne({
          isbn: req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          category: req.body.category
        }, (err, dataBooks) => {
          if(err) {
            res.send(err)
          } else {
            res.send({
              msg: 'data berhasil di buat',
              dataBooks: dataBooks
            })
          }
        })
    })
  }
}
