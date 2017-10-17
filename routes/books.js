const express = require('express');
const router = express.Router();
const Book = require('../controllers/bookCtrl');

router.get('/', Book.getBooks);
router.get('/:isbn', Book.getBook);
router.post('/', Book.createBook);
router.delete('/:isbn', Book.deleteBook);
router.put('/:isbn', Book.updateBook);

module.exports = router;
