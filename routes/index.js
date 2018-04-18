var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/task2', function(req, res, next) {
  res.render('task2', { title: 'Express' });
});

router.get('/task3', function(req, res, next) {
  res.render('task3', { title: 'Express' });
});

router.get('/task4', function(req, res, next) {
  res.render('task4', { title: 'Express' });
});

router.get('/task5', function(req, res, next) {
  res.render('task5', { title: 'Express' });
});



module.exports = router;
