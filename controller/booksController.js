const Book = require('../model/books')

module.exports = {
  findAll: (req, res) => {
    Book.findAll().then((rowsBook) => {
      res.json({
        message: "Tampil Semua Data Buku",
        data: rowsBook
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  findOne: (req, res) => {
    Book.findOne(req.params.id).then((rowBook) => {
      res.json({
        message: "Tampil 1 Data",
        data: rowBook
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  }
}
