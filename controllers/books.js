var DataBooks = require('../models/books')

class Books {

static getAll(req,res){
  DataBooks.getAll().then(result=>{
    res.json(200,{msg:"data books", data:result})
    })
  }


  static addData(req,res){
    let newData={
      isbn: req.body.isbn,
      title: req.body.title  ,
      author: req.body.author,
      category: req.body.category ,
      stock: req.body.stock
    }
    DataBooks.addData(newData).then(result=>{
      res.json(200,{msg:"new id", data:result})
      })
    }


    static editData(req,res){
      let condition ={
        isbn:req.body.isbn
      }
      let newData={
        $set:{
          isbn: req.body.isbn,
          title: req.body.title  ,
          author: req.body.author,
          category: req.body.category ,
          stock: req.body.stock
        }
      }
      DataBooks.editData(condition,newData).then(result=>{
        res.json(200,{msg:"edited id", data:result})
        })
      }

    static deleteData(req,res){
      let condition ={
        isbn:req.body.isbn
      }
    
      DataBooks.deleteData(condition).then(result=>{
        res.json(200,{msg:"deleted id", data:result})
        })
      }

}

module.exports = Books;
