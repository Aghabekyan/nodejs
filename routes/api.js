var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;


/* User Router */
router.get('/users', userController.list);
router.get('/users/:id', userController.getById);
router.post('/users', userController.add);

module.exports = router;
