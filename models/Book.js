const mongoConnection = require('../helpers/mongoConnection');
const ObjectId = require('mongodb').ObjectID;

class Book {

  static all (callback) {

    mongoConnection((err, db) => {

      if (err) throw err;

      db.collection('books').find({}).toArray((err, books) => {

        if (err) throw err;

        db.close();
        callback(books);

      });

    });

  }

  static create (newBook, callback) {

    mongoConnection((err, db) => {

      if (err) throw err;

      db.collection('books').insert(newBook, (err, book) => {

        if (err) throw err;

        db.close();
        callback(book);

      });

    });

  }

  static getById (id, callback) {

    mongoConnection((err, db) => {

      if (err) throw err;

      db.collection('books').findOne({

        _id: ObjectId.isValid(id) ? new ObjectId(id) : ''

      }, (err, book) => {

        if (err) throw err;

        db.close();
        callback(book);

      });

    });

  }

  static updateById (id, newBook, callback) {

    mongoConnection((err, db) => {

      if (err) throw err;

      db.collection('books').findOneAndUpdate(

        { _id: ObjectId.isValid(id) ? new ObjectId(id) : '' },
        { $set : newBook },
        {}, // options

        // callback
        (err, book) => {

          if (err) throw err;

          book.newValue = newBook;

          db.close();
          callback(book);

        }

      );

    });

  }

  static deleteById (id, callback) {

    mongoConnection((err, db) => {

      if (err) throw err;

      db.collection('books').findOneAndDelete(

        { _id: ObjectId.isValid(id) ? new ObjectId(id) : '' },

        // callback
        (err, book) => {

          if (err) throw err;

          db.close();
          callback(book);

        }

      );

    });

  }

}

module.exports = Book;
