const express = require('express');
const router = express.Router();

const books = require('./books');

router.use('/books', books);

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'api index'
  });
});

module.exports = router;
