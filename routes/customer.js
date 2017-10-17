const express = require('express');
const router = express.Router()
const Customer = require('../controller/customer')

router.post('/', Customer.Create)

router.get('/', Customer.Read)

router.put('/:id', Customer.Update)

router.delete('/:id', Customer.Delete)

module.exports = router;