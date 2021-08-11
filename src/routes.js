const express = require('express');
const AuthController = require('./controller/AuthController');
const UserController = require('./controller/UserController');
const router = express.Router();

router.post('/users/register', UserController.register);
router.post('/auth/authenticate', AuthController.authenticate);

module.exports = router