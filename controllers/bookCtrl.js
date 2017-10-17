const Book = require('../models/book');

class BookCtrl {
  static getBooks(req, res) {
    Book.getBooks(req, res)
      .then(values => {
        res.status(200).send(values);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static getBook(req, res) {
    Book.getBook(req, res)
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static createBook(req, res) {
    Book.createBook(req, res)
      .then(value => {
        res.status(201).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static deleteBook(req, res) {
    Book.deleteBook(req, res)
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static updateBook(req, res) {
    Book.updateBook(req, res)
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }
}

module.exports = BookCtrl;
