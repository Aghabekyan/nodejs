var express = require('express');
var router = express.Router();
const User = require('../models').User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* GET Users page. */
router.get('/users', function(req, res, next) {
  var pr = User
      .findAll({
          attributes: ['id', 'firstName', 'lastName']
        })
  pr.then((users) => res.render('users', { title: 'Users', 'users': users }))
});

module.exports = router;