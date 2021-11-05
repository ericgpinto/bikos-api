const express = require('express');
const AdController = require('./controller/AdController');
const ApplicantController = require('./controller/ApplicantController');
const AuthController = require('./controller/AuthController');
const UserController = require('./controller/UserController');
const middleware = require('./middlewares/auth');

const router = express.Router();

router.get('/users/:userId', middleware, UserController.findById)
router.post('/users/register', UserController.register);
router.post('/login', AuthController.login);

//register of
router.post('/ads/new/:userId', middleware, AdController.create)
router.get('/ads/feed', AdController.find)

router.post('/candidates/ads/:adsId/apply/:userId', middleware, ApplicantController.apply)
router.get('/candidates/ads/:adsId', middleware, ApplicantController.index)
module.exports = router
