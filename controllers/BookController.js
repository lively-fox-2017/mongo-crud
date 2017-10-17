const Book = require('../models/Book');

class BookController {

  static all (req, res) {

    Book.all((books) => {

      res.status(200).json(books);

    });

  }

  static create (req, res) {

    Book.create({

      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: parseInt(req.body.stock)

    }, (book) => {

      res.status(201).json({
        message: 'book successfully created',
        book: book
      })

    });

  }

  static getById (req, res) {

    Book.getById(req.params.id, (book) => {

      // If found
      if (book) {

        res.status(200).json(book);

      } else {

        res.status(404).json({
          message: 'book not found'
        });

      }

    });

  }

  static updateById (req, res) {

    Book.updateById(req.params.id, {

      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: parseInt(req.body.stock)

    }, (book) => {

      // If book
      if (book.value) {

        res.status(200).json({
          message: 'book successfully updated',
          book: book
        });

      } else {

        res.status(404).json({
          message: 'book not found'
        });
        
      }

    });

  }

  static deleteById (req, res) {

    Book.deleteById(req.params.id, (book) => {

      // If book
      if (book.value) {

        res.status(200).json({
          message: 'book successfully deleted',
          book: book
        });

      } else {

        res.status(404).json({
          message: 'book not found'
        });

      }

    });

  }

}

module.exports = BookController;
