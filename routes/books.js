var express = require('express');
var router = express.Router();
var BookCtrl = require('../controllers/bookCtrl')

/* GET home page. */
router.get('/', BookCtrl.read);
router.get('/:id', BookCtrl.readOne);
router.post('/', BookCtrl.create);
router.put('/:id', BookCtrl.update);
router.delete('/:id', BookCtrl.delete);

module.exports = router;
