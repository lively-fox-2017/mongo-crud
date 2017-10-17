var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/library';
let ObjectId = require('mongodb').ObjectID;


class Books {

  static findAll(){
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        if(err){
          reject(err)
        }else {
          db.collection('books').find({}).toArray((err, result)=> {
            resolve(result)
          })
        }
        db.close()
      })
    })
  }

  static create(body){
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        if(err){
          reject(err)
        }else {
          var collection = db.collection('books')
          var books1 = {
            "isbn": `${body.isbn}`,
            "title": `${body.title}`,
            "author": `${body.author}`,
            "category": `${body.category}`,
            "stock": body.stock
          }
          collection.insert([books1], (err, result)=>{
            resolve(result)
          })
        }
        db.close()
      })
    })
  }

  static update(params, body){
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        if(err){
          reject(err)
        }else {
          var collection = db.collection('books')
          var id = {
            _id : ObjectId(params.id)
          }
          var books1 = {
            "isbn": `${body.isbn}`,
            "title": `${body.title}`,
            "author": `${body.author}`,
            "category": `${body.category}`,
            "stock": body.stock
          }
          collection.updateOne(id, books1, (err, result)=>{
            if (err) {
              console.log(err);
            }
            resolve(result)
          })
        }
        db.close()
      })
    })

  }

  static delete(params){
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        if(err){
          reject(err)
        }else {
          var collection = db.collection('books')
          var id = {
            _id : ObjectId(params.id)
          }
          collection.deleteOne(id, (err, result)=> {
            resolve(result)
          })
        }
        db.close()
      })
    });

  }

}
module.exports = Books;
