var express = require('express');
var router = express.Router();
const User = require('../models').User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* GET Users page. */
router.get('/users', function(req, res, next) {
  var xxx
  xxx = User
      .findAll({
          attributes: ['id', 'firstName', 'lastName']
        })
  xxx.then((users) => res.render('users', { title: 'Users', 'users': users }))

  // res.render('users', { title: 'Users', 'xxx': xxx })
});

module.exports = router;