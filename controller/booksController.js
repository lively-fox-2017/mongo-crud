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
      if (rowBook){
        res.json({
          message: "Tampil 1 Data",
          data: rowBook
        })
      } else {
        res.json({
          message: "Data tidak di temukan"
        })
      }
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
      if (rowBookUpdated.result.n != 0) {
        res.json({
          message: "Berhasil Ubah Data",
          data: rowBookUpdated
        })
      } else {
        res.json({
          message: "Maaf ID tersebut tidak ada"
        })
      }
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  delete: (req, res) => {
    Book.delete(req.params.id).then((rowBookDeleted) => {
      if (rowBookDeleted.result.n != 0) {
        res.json({
          message: "Berhasil Hapus Data",
          data: rowBookDeleted
        })
      } else {
        res.json({
          message: "Maaf ID tersebut tidak ada"
        })
      }
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  }
}
