const express = require('express');
const AuthController = require('./controller/AuthController');
const UserController = require('./controller/UserController');
const middleware = require('./middlewares/auth');

const router = express.Router();

router.get('/users/:userId', middleware, UserController.findById)
router.post('/users/register', UserController.register);
router.post('/login', AuthController.login);

//register of
//list of ads

module.exports = router
