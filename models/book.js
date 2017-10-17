var MongoClient = require('mongodb').MongoClient
// var url = 'mongodb://admin:1@ds121955.mlab.com:21955/library';
var url = 'mongodb://localhost:27017/library'
var ObjectId = require('mongodb').ObjectId

class Book {
  static connect() {
    var promise = new Promise((resolve, reject) => {
      MongoClient.connect(url, function(err, db) {
        if (err) {
          reject(err);
        }
        resolve(db)
      })
    })
    return promise
  }
  static findAll() {
    var promise = new Promise((resolve, reject) => {
      Book.connect().then((db) => {
        var collection = db.collection('books');
        collection.find({}).toArray(function(err, docs) {
          if (err) {
            reject(err);
          }
          var obj = {
            message: 'Data Found',
            data: docs
          }
          resolve(obj)
        });

        db.close();
      });
    })
    return promise;
  }
  static findOne(id) {
    var promise = new Promise((resolve, reject)=>{
      Book.connect().then((db)=>{
        var objectId = new ObjectId(id);
        var collection = db.collection('books');
        collection.findOne({"_id":objectId}).then((docs, err)=>{
          if(err){
            reject(err);
          }
          var obj = {
            message: 'Data Found',
            data:docs
          }
          resolve(obj)
        })
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }
  static insert(data) {
    var promise = new Promise((resolve, reject)=>{
      Book.connect().then((db)=>{
        var collection = db.collection('books');
        collection.insert({
          isbn:data.isbn,
          title:data.title,
          author:data.author,
          category:data.category,
          stock:parseInt(data.stock)
        }).then((docs, err)=>{
          if(err){
            reject(err);
          }
          var obj = {
            message: 'Data Inserted',
            data:docs
          }
          resolve(obj)
        })
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }
  static update(data, id) {
    var promise = new Promise((resolve, reject)=>{
      Book.connect().then((db)=>{
        var objectId = new ObjectId(id);
        var collection = db.collection('books');
        var objData = {
          isbn:data.isbn,
          title:data.title,
          author:data.author,
          category:data.category,
          stock:parseInt(data.stock)
        }
        collection.findOneAndUpdate({"_id":objectId},objData).then((docs, err)=>{
          if(err){
            reject(err);
          }
          var obj = {
            message: 'Data Updated',
            data:docs
          }
          resolve(obj)
        })
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }
  static delete(id) {
    var promise = new Promise((resolve, reject)=>{
      Book.connect().then((db)=>{
        var objectId = new ObjectId(id);
        var collection = db.collection('books');
        collection.findOneAndDelete({"_id":objectId}).then((docs, err)=>{
          if(err){
            reject(err);
          }
          var obj = {
            message: 'Data Deleted',
            data:docs
          }
          resolve(obj)
        })
      }).catch((err)=>{
        reject(err);
      })
    })
    return promise;
  }
}


module.exports = Book;
