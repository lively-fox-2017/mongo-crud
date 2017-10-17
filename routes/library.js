const express = require('express');
const router = express.Router();
const books = require('../controllers/library');

router.get('/', books.findAll)
router.post('/', books.create)
router.put('/:id', books.update)
router.delete('/:id', books.delete)

module.exports = router;
