const db          = require('mongodb')
const ObjectId    = require('mongodb').ObjectId
const MongoClient = require('mongodb').MongoClient
const URI         = 'mongodb://localhost:27017/library'



class booksController {
    constructor() {
        
    }

    allData (req,res){
        MongoClient.connect(URI,(err,db)=>{
            if(!err) {
                console.log('CONNECT MONGO')
                db.collection('booksCollection').find({}).toArray()
                .then(allBooks=>{
                    res.send(allBooks)
                })
                .catch(err=>{
                    res.send({
                        err:err,
                        msg:'Error get AllBooks'
                    })
                })
            }
            else{
                console.log('ERROR MONGO')
                res.send({
                    err:err,
                    msg: 'ERROR CONNECT MONGO'
                })
            }
            
    
        })
    }

    postData (req,res){ //forInsert
        MongoClient.connect(URI)
        .then(db => {
            console.log('CONNECT MONGO')
            // console.log('ogitampan')
            // res.send('ogi')
            var obj = {
            isbn: `${req.body.isbn}`,
            title: `${req.body.title}`,
            author: `${req.body.author}`,
            category: `${req.body.category}`,
            stock: parseInt(`${req.body.stock}`)
            }
            db.collection('booksCollection').insertOne(obj)
            .then(allBooks => {
                res.send(allBooks)
            })
            .catch(err => {
                res.send({
                    err: err,
                    msg: 'Error Post new Book'
                })
            })
        })
        .catch(err=>{
            res.send({
                err:err,
                msg:'ERROR CONNECT MONGO'
            })
        })
        
    }


    update (req,res) {//editData
        MongoClient.connect(URI)
        .then(db =>{
            console.log('CONNECT MONGO')
            db.collection('booksCollection').updateOne(
                { isbn: req.params.isbn },
                { 
                    isbn: req.body.isbn,
                    title: req.body.title,
                    author: req.body.author,
                    category:req.body.category,
                    stock: parseInt(req.body.stock)
                }
                // coba pake $set kalo ga berhasil
            )
            .then(result=>{
                res.send({
                    result:result,
                    msg:`success update book with isbn ${req.params.isbn}`
                })
            })
            .catch(err=>{
                res.send({
                    err:err,
                    msg:`error update book with isbn ${req.params.isbn}`
                })
            })
        })
        .catch(err=>{
            res.send({
                err:err,
                msg:'ERROR CONNECT MONGO'
            })
        })
        
    }

    remove (req,res) {
        // res.send('blabla ' +req.params.isbn)
        MongoClient.connect(URI)
        .then(db =>{
            console.log('CONNECT MONGO')
            db.collection('booksCollection').remove({isbn: req.params.isbn})
            .then(result=>{
                res.send({
                    result:result,
                    msg:`Success delete book with isbn ${req.params.isbn}`
                })
            })
            .catch(err=>{
                res.send({
                    err:err,
                    msg:`error delete book with isbn ${req.params.isbn}`
                })
            })
        })
        .catch(err=>{
            res.send({
                err:err,
                msg:'ERROR CONNECT MONGO'
            })
        })
    }

}




module.exports = booksController



