var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = require('../data/db.js')
  res.render('index', { title: 'Express' });
});


module.exports = router;
