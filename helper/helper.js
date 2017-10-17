const mongo = require('mongodb');
const mongoClient = mongo.MongoClient
const url = "mongodb://localhost:27017/admin";

module.exports = {
  mongoAuth: {
    db: {
      authSource: 'admin'
    }
  }
}
