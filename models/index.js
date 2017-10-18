const express = require('express');
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const URI = 'mongodb://localhost:27017/library'
const mongoClient = mongodb.MongoClient

function connect(cb){
  mongoClient.connect(URI, function(err, db){
    if(err) res.status(503).send(err)
    cb(db)
  })
}

module.exports = connect
