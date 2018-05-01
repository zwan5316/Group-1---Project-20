var express = require('express');
var controller = require('../controllers/dwdb.controller');
var router = express.Router();

router.get('/', controller.start);
//router.get('/changeurl', controller.changeurl);


module.exports = router;