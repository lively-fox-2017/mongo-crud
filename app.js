const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library'


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const books = require('./routers/booksroutes')

app.use('/api', books)

app.listen(process.env.Port || 3000, ()=>{
  console.log('i am running at port 3000');
})
