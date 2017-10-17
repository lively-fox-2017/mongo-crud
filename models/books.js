const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb://localhost:27017/library';
const ObjectId = require('mongodb').ObjectId

class Book {
  constructor() {

  }

  static findBook() {
    let promise = new Promise(function(resolve,reject) {
        MongoClient.connect(uri, function(err,db) {
          // console.log('TESTT2');
          if (!err) {
            db.collection("books").find({}).toArray (function(err, result) {
              // console.log('TESTTTTTTT');
              resolve(result)
              db.close()
            })
          } else {
            reject(err)
          }
        })
    })
    return promise
  }

  static createBook(body) {
    let promise = new Promise(function(resolve,reject) {
        MongoClient.connect(uri, function(err,db) {
          if (!err) {
            var books = {
              "isbn": body.isbn,
              "title": body.title,
              "author": body.author,
              "category": body.category,
              "stock": body.stock
            }
            db.collection("books").insertOne(books, function(err,result) {
              // console.log(result);
              resolve(result)
              db.close()
            })
          } else {
            reject(err)
          }
        })
    })
    return promise
  }

  static deleteBook(params) {
    let promise = new Promise(function(resolve,reject) {
      MongoClient.connect(uri, function(err,db) {
        if (!err) {
          var id = {
            _id: ObjectId(params.id)
          }
          db.collection("books").deleteOne(id, function(err,result) {
            resolve(result)
            db.close()
          })
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static updateBook(params,body) {
    let promise = new Promise(function(resolve,reject) {
      MongoClient.connect(uri, function(err,db) {
        if (!err) {
          var id = {
            _id: ObjectId(params.id)
          }
          var books = {
            "isbn": body.isbn,
            "title": body.title,
            "author": body.author,
            "category": body.category,
            "stock": body.stock
          }

          db.collection("books").updateOne(id,books, function(err,result) {
            resolve(result)
            db.close()
          })
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

}

module.exports = Book;
