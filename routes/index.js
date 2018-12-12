var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
});

/* User Router */
router.get('/api/users', userController.list);

module.exports = router;
