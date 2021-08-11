const express = require('express');
const UserController = require('./controller/UserController');
const router = express.Router();

router.post('users/register', UserController.register);

module.exports = router