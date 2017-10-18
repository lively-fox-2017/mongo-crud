const express = require('express');
const router = express.Router()
const Library = require('../controller/data')

router.get('/', Library.getData)

router.post('/', Library.saveData)

router.put('/:isbn', Library.updateData)

router.delete('/:isbn', Library.deleteData)

module.exports = router
