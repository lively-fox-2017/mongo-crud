const models = require('../models/library');

class Books {
  static findAll(req, res){
    models.findAll()
    .then(dataBuku=>{
      res.send(dataBuku)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static create(req, res){
    models.create(req.body)
    .then(()=>{
      res.send('Success Inserted Into Books Collection')
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static update(req, res){
    models.update(req.params, req.body)
    .then(()=>{
      res.send('Success Updated from Books Collection')
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static delete(req, res){
    models.delete(req.params)
    .then(()=>{
      res.send('Success Delete from Books Collection')
    })
    .catch(err=>{
      res.send(err)
    })
  }
}




module.exports = Books;
