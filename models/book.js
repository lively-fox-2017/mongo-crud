const MongoClient = require('mongodb').MongoClient
const URL = 'mongodb://localhost:27017/booksdb';

class Book {
  static getBooks(req, res) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        let collection = db.collection('books')
        collection.find().toArray((err, docs) => {
          if (err) reject(err);
          resolve(docs);
        })
      })
    })
  }

  static getBook(req, res) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        let collection = db.collection('books')
        collection.find({
          isbn: req.params.isbn
        }).toArray((err, doc) => {
          if (err) reject(err);
          resolve(doc);
        })
      })
    })
  }

  static createBook(req, res) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        let collection = db.collection('books');
        collection.insertOne(req.body, (err, inserted) => {
          if (err) reject(err);
          resolve(inserted);
        });
      })
    })
  }

  static deleteBook(req, res) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        let collection = db.collection('books')
        collection.deleteOne({
          isbn: req.params.isbn
        }, (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
      })
    })
  }

  static updateBook(req, res) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        let collection = db.collection('books')
        collection.updateOne({
          isbn: req.params.isbn
        }, {
          $set: req.body
        }, (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
      })
    })
  }
}

module.exports = Book;
