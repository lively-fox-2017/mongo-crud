const express = require('express');
const router = express.Router()
const Moo = require('../controller/mongo')

router.post('/', Moo.Create)

router.get('/', Moo.Read)

// router.get('/:id', Moo.FindOne)

router.put('/:id', Moo.Update)

router.delete('/:id', Moo.Delete)

module.exports = router;