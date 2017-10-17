const MongoClient = require('mongodb').MongoClient
const URL = 'mongodb://localhost:27017/booksdb';

class Book {
  static getBooks(req, res) {
    MongoClient.connect(URL, (err, db) => {
      let collection = db.collection('books')
      collection.find().toArray((err, docs) => {
        if (err) res.status(400).send(err);
        res.status(200).send(docs);
      })
    })
  }

  static getBook(req, res) {
    MongoClient.connect(URL, (err, db) => {
      let collection = db.collection('books')
      collection.find({
        isbn: req.params.isbn
      }).toArray((err, doc) => {
        if (err) res.status(400).send(err);
        res.status(200).send(doc);
      })
    })
  }

  static createBook(req, res) {
    MongoClient.connect(URL, (err, db) => {
      let collection = db.collection('books');
      collection.insertOne(req.body, (err, inserted) => {
        if (err) res.status(400).send(err);
        res.status(201).send(inserted);
      });
    })
  }

  static deleteBook(req, res) {
    MongoClient.connect(URL, (err, db) => {
      let collection = db.collection('books')
      collection.deleteOne({
        isbn: req.params.isbn
      }, (err, result) => {
        if (err) res.status(400).send(err);
        res.status(200).send(result);
      })
    })
  }

  static updateBook(req, res) {
    MongoClient.connect(URL, (err, db) => {
      let collection = db.collection('books')
      collection.updateOne({
        isbn: req.params.isbn
      }, {
        $set: req.body
      }, (err, result) => {
        if (err) res.status(400).send(err);
        res.status(200).send(result);
      })
    })
  }
}

module.exports = Book;
