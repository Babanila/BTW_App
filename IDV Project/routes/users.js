var express = require('express');
var router = express.Router();
var user = require('../models/userModel');
/* GET users listing. */
router.post('/register', function(req, res, next) {
  user.register(req,res,next);
});

module.exports = router;
