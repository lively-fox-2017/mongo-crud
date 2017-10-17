const express = require('express')
const router = express.Router()
const libraryController = require('../controller/libraryController')

router.get('/', libraryController.all)
router.post('/', libraryController.create)

module.exports = router
