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
  },

  insert: (req, res) => {
    Book.insert(req.body).then((rowBookInserted) => {
      res.json({
        message: "Berhasil Tambah Data Buku",
        data: rowBookInserted
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  update: (req, res) => {
    Book.update(req.body, req.params.id).then((rowBookUpdated) => {
      res.json({
        message: "Berhasil Ubah Data",
        data: rowBookUpdated
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  delete: (req, res) => {
    Book.delete(req.params.id).then((rowBookDeleted) => {
      res.json({
        message: "Berhasil Hapus Data",
        data: rowBookDeleted
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  }
}
