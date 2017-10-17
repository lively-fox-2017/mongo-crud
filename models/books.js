var MongoClient = require('mongodb').MongoClient, assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/library';
// Use connect method to connect to the Server
const ObjectId = require('mongodb').ObjectId


class Books {
  constructor() {

  }
  static findAll(){
    return new Promise(function(resolve,reject){
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        db.collection("books").find({}).toArray(function(err, rows) {
          if (err) reject(err);
          // console.log(rows);
          resolve(rows);
          db.close();
        });
      });
    })
  }
  static create(body){
    return new Promise(function(resolve,reject){
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        db.collection("books").insertOne({
          isbn:`'${body.isbn}'`,
          title:`'${body.title}'`,
          author:`'${body.author}'`,
          category:`'${body.category}'`,
          stock:`'${body.stock}'`
        }, function(err, rows) {
          if (err) reject(err);
          // console.log(rows);
          resolve({
            "message":"inserting data succesfull",
            "data":rows
          })
          db.close();
        });
      });
    })
  }
  static findOne(){
    return new Promise(function(resolve,reject){
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        db.collection("books").findOne({}, function(err, rows) {
          if (err) reject(err);
          // console.log(rows);
          resolve(rows)
          db.close();
        });
      });
    })
  }
  static update(body,params){
    // console.log(body);
    return new Promise(function(resolve,reject){
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        db.collection("books").updateOne({
          _id: ObjectId(params.id)
        },{
          isbn:`'${body.isbn}'`,
          title:`'${body.title}'`,
          author:`'${body.author}'`,
          category:`'${body.category}'`,
          stock:`'${body.stock}'`
        },
        function(err, rows) {
          if (err) reject(err);
          // console.log(rows);
          resolve({
            "message":"updating data succesfull",
            "data":rows
          })
          db.close();
        });
      });
    })
  }
  static delete(params){
    return new Promise(function(resolve,reject){
      MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        db.collection("books").deleteOne({
          _id: ObjectId(params.id)
        },
        function(err, rows) {
          if (err) reject(err);
          // console.log(rows);
          resolve({
            "message":"deleting data succesfull",
            "data":rows
          })
          db.close();
        });
      });
    })
  }
}

module.exports = Books
