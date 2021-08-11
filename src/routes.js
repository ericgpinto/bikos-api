const express = require('express');
const AuthController = require('./controller/AuthController');
const UserController = require('./controller/UserController');
const router = express.Router();

router.post('/users/register', UserController.register);
router.post('/login', AuthController.login);

module.exports = router