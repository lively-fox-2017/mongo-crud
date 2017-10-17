const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

let index = require('./routs/index')
let books = require('./routs/books')

app.use('/', index)
app.use('/books', books)

app.listen(3000, () => {
	console.log('Ready use port 3000')
})