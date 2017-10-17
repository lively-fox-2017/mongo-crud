const express = require('express');
const router=express.Router()
const perpus=require('../controllers/library')


// router.post('/library',perpus.insertDocument)
router.post('/library', perpus.insertBook)

router.get('/library',perpus.viewBook)

router.delete('/library/:id',perpus.deleteBook)

router.put('/library/:id',perpus.editBook)

module.exports = router;
