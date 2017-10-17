var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/library";


class DataBooks {

  static getAll(){
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        db.collection('books').find({}).toArray((err,result)=>{
          resolve(result)
        })
      });
    });
  }

  static addData(newData){
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        db.collection('books').insertOne(newData).then(result=>{
          resolve(result.insertedId)
        })
      });
    });
  }

  static editData(condition,newData){
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        db.collection('books').updateOne(condition,newData).then(result=>{
          resolve(result)
        })
      });
    });
  }

  static deleteData(condition){
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        db.collection('books').deleteOne(condition).then(result=>{
          resolve(result)
        })
      });
    });
  }

}

module.exports = DataBooks;
