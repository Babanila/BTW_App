var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

/* GET form page. */
router.get('/register', function(req, res, next) {
    res.render('form', { title: 'Express' });
});



module.exports = router;
