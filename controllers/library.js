const ObjectId = require('mongodb').ObjectID;
// const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/library';

let insertBook = function(req,res){
MongoClient.connect(url,function(err,db){
  let addbook = db.collection('library')
  if(!err){
    addbook.insertOne({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock : req.body.stock
    },(err,result)=>{
      if(!err){
        res.send(result)
      }else {
        res.send(err)
      }
    })
  }
})
}

let viewBook=function(req,res){
  MongoClient.connect(url,(err,db)=>{
    let view=db.collection('library')
    if(!err){
      view.find({}).toArray(function(err,docs){
        //kalau ada callback didalamanya harus ngirim hasil dari callback
        if(!err){
          res.send(docs)
        }else{
          res.send(err)
        }
      })
    }
  })
}

let deleteBook= function(req,res){
  MongoClient.connect(url,function(err,db){
    let del=db.collection('library')
    if(!err){
      del.deleteOne({_id:ObjectId(req.params.id)}, function(err,result){
        if(!err){
          res.send(result)
        }else{
          res.send(err)
        }
      })
    }
  })
}

let editBook=function(req,res){
  MongoClient.connect(url,function(err,db){
    let ins=db.collection('library')
    if(!err){
      ins.updateOne({_id:ObjectId(req.params.id)},
      {isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock:req.body.stock},function(err,result){
        if(!err){
          res.send(result)
        }else{
          res.send(err)
        }
      })
    }
  })
}


module.exports = {insertBook,
                  viewBook,
                  deleteBook,
                  editBook
                    } ;
