const MongoClient = require('mongodb').MongoClient
const objectId = require('mongodb').ObjectId
const URL = "mongodb://127.0.0.1:27017/library"


class Customer {
    static Create(body) {
        return new Promise((resolve, reject) => {

            MongoClient.connect(URL, function (err, db) {
                if (err) reject(err);
                let person = {
                    "name": `${body.name}`,
                    "memberid": `${body.memberid}`,
                    "address": `${body.address}`,
                    "zipcode": `${body.zipcode}`,
                    "phone": body.phone
                }
                db.collection("customers").insertOne(person, function (err) {
                    if (err) reject(err);
                    // res.send(buku)
                    resolve(person)
                    db.close();
                });
            });
        })
    }

    static Read() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(URL, function (err, db) {
                if (err) reject(err);
                db.collection("customers").find({}).toArray(function (err, result) {
                    if (err) reject(err);
                    resolve(result)
                    db.close();
                });
            });

        })

    }

    static Update(params, body) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(URL, function (err, db) {
                if (err) reject(err);
                let find = { "_id": objectId(params.id) }
                db.collection("customers").findOne(find, function (err, result) {
                    if (err) reject(err);
                    // console.log(result);
                    var newvalues = {
                        "name": `${body.name}`,
                        "memberid": `${body.memberid}`,
                        "address": `${body.address}`,
                        "zipcode": `${body.zipcode}`,
                        "phone": body.phone
                    };
                    db.collection("customers").updateOne(find, newvalues, function (err, respon) {
                        if (err) reject(err);
                        resolve({ result, respon })
                        db.close();
                    });
                });
            });

        })
    }

    static Delete(params) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(URL, function (err, db) {
                if (err) throw err;
                let find = { "_id": objectId(params.id) }
                db.collection("customers").findOne(find, function (err, result) {
                    db.collection("customers").deleteOne(find, function (err, obj) {
                        if (err) throw err;
                        resolve({ result, obj })
                        db.close();
                    });
                })
            });
        })
    }
}


module.exports = Customer;
