const express = require('express');
const app = express()
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const URI = 'mongodb://localhost:27017/library'
const mongoClient = mongodb.MongoClient

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTING

const index = require('./routes/index')

app.use('/', index)

// mongoClient.connect(URI, function(err, db){
//   if(err) res.status(503).send(err)
//     // db.collection('colbooks').find().toArray(function(err, result){
//     //   if(err) res.status(200).send(err)
//     //   console.log(result)
//     // })
//     // res.send(db)
//     console.log(db)
// })

app.listen(3000, function(){
  console.log(`AYO JALAN!`)
})
