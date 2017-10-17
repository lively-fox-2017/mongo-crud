const express = require('express');
const router = express.Router();

const BookController = require('../../controllers/BookController');

// GET /books
router.get('/', BookController.all);

// POST /books
router.post('/', BookController.create);

// GET /books/:id
router.get('/:id', BookController.getById);

// PUT /books/:id
router.put('/:id', BookController.updateById);

// DELETE /books/:id
router.delete('/:id', BookController.deleteById);

module.exports = router;
