var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/library";
var ObjectId = require('mongodb').ObjectId
// var Model = require('../models/books')

class Book {
  constructor(){

  }

  static findBooks(){
    return new Promise((resolve, reject)=>{
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("books").find({}).toArray (function(err, result) {
      if (err) reject(err);
      resolve(result)
      db.close();
      });
    });
  })
}

  static createBooks(body){
    return new Promise((resolve, reject)=>{
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var books = {
        "isbn": body.isbn,
        "title": body.title,
        "author": body.author,
        "category": body.category,
        "stock": body.stock
      };
        db.collection("books").insertOne(books, function(err, result) {
        if (err) reject(err);
        resolve(result)
        db.close();
        });
      });
    })
  }

  static deleteBooks(params){
    return new Promise((resolve, reject)=>{
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var books = {
        _id: ObjectId(params.id)
      }
      db.collection("books").deleteOne(books, function(err, result) {
        if (err) reject(err);
        resolve(result)
        db.close();
      });
    });
  })
}


  static updateBooks(params,body){
    return new Promise((resolve, reject)=>{
    MongoClient.connect(url, function(err,db){
      if(err) throw  err;
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
        db.collection("books").updateOne(id, books, function(err, dataBooks) {
          if(err) reject(err);
          resolve(dataBooks)
          db.close()
        })
      })
    })
  }
}

module.exports = Book
