const express = require('express')
const mongo = require('mongodb')
const db  = require('mongodb')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


// const mongoDB     = require('mongodb');
// const MongoClient = mongoDB.MongoClient
// const ObjectId    = mongoDB.ObjectId
// const URI         = 'mongodb://localhost:27017/library'

// MongoClient.connect(URI,(err)=>{
//     if(err) console.log('ERROR MONGO')
//     console.log('CONNECT MONGO')
// })

const booksMongoDb = require('./routes/books')

app.use('/', booksMongoDb)

app.listen(3000,()=>{
    console.log('3000 ATK POINTS')
})

