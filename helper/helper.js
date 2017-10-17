const mongo = require('mongodb');
const mongoClient = mongo.MongoClient
const url = "mongodb://localhost:27017/admin";

module.exports = {
  // mongoDB role authenticate
  mongoAuth: {
    db: {
      authSource: 'admin'
    }
  },

  dataObj: (reqBody) => {
    let Obj = {
      isbn: reqBody.isbn,
      title: reqBody.title,
      author: reqBody.author,
      category: reqBody.category,
      stock: reqBody.stock
    }

    return Obj
  }

}
