
const model = require('../model/book')


class Book{
    static Create(req, res) {
        model.Create(req.body)
        .then(buku=>{
            res.send(buku)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    
    static Read(req, res){
        model.Read()
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static Update(req, res){
        model.Update(req.params, req.body)
        .then(({result, respon})=>{
            res.send({result, respon})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static Delete(req, res){
        model.Delete(req.params)
        .then(({result, obj})=>{
            res.send({result, obj})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}


module.exports = Book;
