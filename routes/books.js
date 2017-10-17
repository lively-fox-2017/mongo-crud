const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books');


router.get('/', new booksController().allData)
router.post('/', new booksController().postData)
// router.get('/:id',booksController.single)
router.put('/:isbn',new booksController().update)
router.delete('/:isbn', new booksController().remove)

module.exports = router