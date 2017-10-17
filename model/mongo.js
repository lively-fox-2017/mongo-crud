const MongoClient = require('mongodb').MongoClient
const objectId = require('mongodb').ObjectId
const URL = "mongodb://127.0.0.1:27017/library"


class Mongo {
    static Create(body) {
        return new Promise ((resolve, reject)=>{

            MongoClient.connect(URL, function (err, db) {
                if (err) reject(err);
                let buku = {
                    "isbn": `${body.isbn}`,
                    "title": `${body.title}`,
                    "author": `${body.author}`,
                    "category": `${body.category}`,
                    "stock": body.stock
                }
                db.collection("perpus").insertOne(buku, function (err) {
                    if (err) reject(err);
                    // res.send(buku)
                    resolve(buku)
                    db.close();
                });
            });
        })
    }

    static Read() {
        return new Promise ((resolve, reject)=>{
            MongoClient.connect(URL, function (err, db) {
                if (err) reject(err);
                db.collection("perpus").find({}).toArray(function (err, result) {
                    if (err) reject(err);
                    resolve(result)
                    db.close();
                });
            });

        })

    }

    static Update(params, body) {
        return new Promise((resolve, reject)=>{
            MongoClient.connect(URL, function (err, db) {
                if (err) reject(err);
                let find = { "_id": objectId(params.id) }
                db.collection("perpus").findOne(find, function (err, result) {
                    if (err) reject(err);
                    // console.log(result);
                    var newvalues = {
                        "isbn": `${body.isbn}`,
                        "title": `${body.title}`,
                        "author": `${body.author}`,
                        "category": `${body.category}`,
                        "stock": body.stock
                    };
                    db.collection("perpus").updateOne(find, newvalues, function (err, respon) {
                        if (err) reject(err);
                        // console.log("1 document updated");
                        resolve({result, respon})
                        // res.send({ result, respon })
                        db.close();
                    });
                });
            });

        })
    }

    static Delete(params) {
        return new Promise((resolve, reject)=>{
            MongoClient.connect(URL, function (err, db) {
                if (err) throw err;
                let find = { "_id": objectId(params.id) }
                db.collection("perpus").findOne(find, function (err, result) {
                    db.collection("perpus").deleteOne(find, function (err, obj) {
                        if (err) throw err;
                        // res.send({ result, obj })
                        resolve({result, obj})
                        db.close();
                    });   
                })
            });
        })
    }
}


module.exports = Mongo;
