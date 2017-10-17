'use strict';
const Book = require('../models/book');

class controller{
  static insertData(req, res){
    let insertedData = {
      isbn:req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    Book.insert(insertedData).then((result)=>{
      res.status(201).json(result);
    }).catch((err)=>{
      res.status(500).send('internal server error')
    })
  }

  static getAllData(req, res){
    Book.getAll().then((result)=>{
      res.status(200).json(result);
    }).catch((err) => {
      res.status(500).send('internal server error')
    })
  }

  static getDataBy(req, res){
    Book.getBy(req.params.key, req.params.value).then((result)=>{
      res.status(200).json(result)
    }).catch((err)=>{
      res.status(500).send(err)
    })
  }

  static deleteBy(req, res){
    Book.deleteBy(req.params.key, req.params.value).then((result)=>{
      res.status(202).json(result)
    }).catch((err) => {
      res.status(500).send(err)
    })
  }

  static updateByIsbn(req, res){
    let set = {
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      stock:req.body.stock
    }
    Book.update(req.params.isbn, set).then((result)=>{
      res.status(202).json(result)
    }).catch((err) => {
      res.status(500).send(err)
    })
  }
}

module.exports = controller;
