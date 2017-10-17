const mongo = require('mongodb')
const mongoClient = mongo.MongoClient
const url = 'mongodb://admin:admin@localhost:27017/library'
const helper = require('../helper/helper')

class Book{
  static findAll(){
    return new Promise((resolve, reject) => {
      mongoClient.connect(url, helper.mongoAuth, (err, library) => {
          if (err) {
            reject(err)
          } else {
            let sort = {title: 1} // 1 = ASC, -1 = DESC
            library.collection("books").find().sort(sort).toArray((err, results) => {
              if (err) {
                reject(err)
              } else {
                resolve(results)
              }
            })
          }
      })
    })
  }

  static findOne(id){
    return new Promise((resolve, reject) => {
      mongoClient.connect(url, helper.mongoAuth, (err, library) => {
        if (err) {
          reject(err)
        } else {
          let objId = new mongo.ObjectID(id); // Mongo ObjectID
          library.collection("books").findOne({ _id: objId }, (err, result) => {
            if (err) {
              reject(err)
            } else {
              resolve(result)
            }
          })
        }
      })
    });
  }

  // static insert(){
  //   return new Promise((resolve, reject) => {
  //
  //   });
  // }
}

module.exports = Book
