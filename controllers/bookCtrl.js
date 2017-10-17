var model = require('../models/index');

class BookCtrl {
  static read(req, res, next) {
    // Use connect method to connect to the Server
    model.Book.findAll().then((obj)=>{
      res.status(200).send(obj)
    }).catch((err)=>{
      res.status(400).send(err)
    })
  }
  static readOne(req, res, next){
    model.Book.findOne(req.params.id).then((obj)=>{
      res.status(200).send(obj)
    }).catch((err)=>{
      console.log(err);
      res.status(400).send(err)
    })
  }
  static update(req, res, next){
    model.Book.update(req.body,req.params.id).then((obj)=>{
      res.status(200).send(obj)
    }).catch((err)=>{
      console.log(err);
      res.status(400).send(err)
    })
  }
  static delete(req, res, next){
    model.Book.delete(req.params.id).then((obj)=>{
      res.status(200).send(obj)
    }).catch((err)=>{
      console.log(err);
      res.status(400).send(err)
    })
  }
  static create(req, res, next) {
    model.Book.insert(req.body).then((obj)=>{
      res.status(200).send(obj)
    }).catch((err)=>{
      console.log(err);
      res.status(400).send(err)
    })
  }
}

module.exports = BookCtrl;
