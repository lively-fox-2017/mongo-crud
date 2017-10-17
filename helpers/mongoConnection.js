const dotenv = require('dotenv').config();

const MongoClient = require('mongodb');
const url = process.env.MONGO_URL;

module.exports = (callback) => {
  MongoClient.connect(url, (err, db) => {
    callback(err, db);
  });
};
