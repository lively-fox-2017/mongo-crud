'use strict'

const express = require('express');
const router = express.Router();
const BookApiController = require('./../controllers/bookApiController');

router.get('/', BookApiController.findAll)

router.get('/:id', BookApiController.findOne)

router.post('/', BookApiController.create)

router.put('/:id', BookApiController.update)

router.delete('/:id', BookApiController.delete)

module.exports = router;