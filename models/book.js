const mongodb = require('mongodb');
const url = "mongodb://localhost:27017/library"
const MongoClient = mongodb.MongoClient;
const collectionName = 'books'


class Book{
  static connect(callback){
    MongoClient.connect( url, (err, db)=>{
      if(err){
        res.status(500).send('500 internal server error')
      }else{
        callback(db)
      }

    })
  }

  static insert(inputData){
    return new Promise((resolve, reject)=>{

      let insertedData = Array.isArray(inputData)? inputData: [inputData];
      Book.connect((db)=>{
        db.collection(collectionName).insertMany(insertedData,
          function(err, result){
            if(err){
              reject(err)
            }else{
              resolve(result)
            }
          }
        )
      })

    })

  }

  static getAll(){
    return new Promise((resolve, reject)=>{

      Book.connect((db)=>{
        db.collection(collectionName).find({}).toArray(function(err, docs){
          if(err){
            reject(err)
          }else{
            resolve(docs)
          }
        })
      })
    })
  }

  static getBy(key, value){
    let equal={}
    equal[key]=value
    return new Promise((resolve, reject)=>{
      Book.connect((db)=>{
        db.collection(collectionName).find(equal).toArray(function(err, docs){
          if(err){
            reject(err)
          }else{
            resolve(docs)
          }
        })
      })
    })
  }

  static deleteBy(key, value){
    let equal={}
    equal[key] = value
    return new Promise((resolve, reject)=>{
      Book.connect((db)=>{
        db.collection(collectionName).deleteOne(equal, function(err, result){
          if(err){
            reject(err)
          }else{
            resolve(result)
          }
        })
      })
    })
  }

  static update(isbn, iSet){
    let equal={isbn}
    let set={
      $set:iSet
    }
    console.log(set);
    return new Promise((resolve, reject)=>{
      Book.connect((db)=>{
        db.collection(collectionName).updateOne(equal, set, function(err, result){
          if(err){
            reject(err)
          }else{
            resolve(result)
          }
        })
      })
    })
  }
}

module.exports = Book;
