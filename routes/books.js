const express = require('express')
const router = express.Router()
const libraryController = require('../controller/libraryController')

router.get('/', libraryController.all)
router.post('/', libraryController.create)
router.put('/:id', libraryController.update)
router.delete('/:id', libraryController.delete)

module.exports = router
