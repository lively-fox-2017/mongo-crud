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
}

module.exports = Book;
