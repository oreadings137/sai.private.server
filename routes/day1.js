var express = require('express');
var router = express.Router();

/* GET users listing. */

var db = require( '../data/db.js')

router.get('/newUser', function(req, res, next) {
  var sql = 'INSERT INTO users （username, password, creat_time， cellphone, gender, profile_img, email, currency_type, user_type, user_from, wechat_id, alipay_id, note ) VALUES('
  + '"'+ req.query.username +'"' + ',' + '"'+ req.query.password + '"'+ ',' + 'now()' + ','
  + req.query.cellphone +',' + req.query.gender + ',' + req.query.profile_img + ',' + '"'
  + req.query.email + '"' + ',' + '"' + req.query.currency_type + '"'+','+ req.query.user_type + ',' + '"'
  + req.query.user_from + '"' + ',' + '"'+ req.query.wechat_id + '"' + ',' + '"' + req.query.alipay_id + '"' + ',' + '"'
  + req.query.note + '"' + ')'
  db.query(sql, (err, rows, fields)=>{
    res.send(rows);
  })
});

router.get('/getUser', function(req, res, next) {
  var sql = 'SELECT * FROM users WHERE username = "' + req.query.username
  + '" AND password = "' + req.query.password + '"'
  db.query(sql, (err, rows, fields)=>{
    res.send(rows);
  })
});

router.get('/newMoneyFlow', function(req, res, next) {
  var sql = 'INSERT INTO money_flow (user_id, in_out, amount, currency, category_id, date_time, book, location, location_info, img, text, others, from, special_note) VALUES('
  + req.query.user_id + ','+ req.query.in_out + ',' + req.query.amount + ',' + '"'
  + req.query.currency + '"' + ',' +  req.query.category_id + ',' + now() + ','+ '"'+ req.query.book + '"'+ ',' + '"'
  + req.query.location +'"' +',' + '"'+ req.query.location_info + '"' + ',' + '"' + req.query.img + '"' + ',' + '"'
  + req.query.text + '"' +',' + '"' + req.query.others + '"'+','+ '"'+ req.query.from +'"' + ','+ '"'
  + req.query.special_note + '"' + ')'
  db.query(sql, (err, rows, fields)=>{
    res.send(rows);
  })
});

router.get('/getMoneyFlows', function(req, res, next) {
  var sql = ''
  db.query(sql, (err, rows, fields)=>{
    res.send(rows);
  })
});

router.get('/newCategory', function(req, res, next) {
  var sql = 'INSERT INTO category ( name, icon_id, user_id, creat_time, type, note) VALUES('
  + '"' + req.query.name + '"'+','+ req.query.icon_id+',' +req.query.user_id +','
  + 'now()'+',' +'"'+req.query.type + '"'+','+'"' + req.query.note + '"' + ')'
  db.query(sql, (err, rows, fields)=>{
    res.send(rows);
  })
});

router.get('/getCategory', function(req, res, next) {
  var sql = ''
  db.query(sql, (err, rows, fields)=>{
    res.send(rows);
  })
});

router.get('/newLoginRecord', function(req, res, next) {
  var sql = 'INSERT INTO login_record( user_id, login_time, login_location, device_info, network_info ) VALUES('
  + req.query.user_id +',' +'now()'+ ','+ '"'+ req.query.login_location +'"'+','+ '"'
  + req.query.device_info + '"'+','+ '"'+req.query.network_info + '"' +')'
  db.query(sql, (err, rows, fields)=>{
    res.send(rows);
  })
});

router.get('/getLoginRecords', function(req, res, next) {
  var sql = ''
  db.query(sql, (err, rows, fields)=>{
    res.send(rows);
  })
});




module.exports = router;
