const express = require('express');
const AdController = require('./controller/AdController');
const ApplicantController = require('./controller/ApplicantController');
const AuthController = require('./controller/AuthController');
const UserController = require('./controller/UserController');
const middleware = require('./middlewares/auth');

const router = express.Router();

router.get('/ads/:adsId/candidates', middleware, AdController.getApplicants)

router.get('/users/:userId', middleware, UserController.findById)
router.post('/users/register', UserController.register);
router.post('/login', AuthController.login);

router.get('/ads/feed', AdController.find)
router.get('/ads/:userId', middleware, AdController.findById)

router.post('/ads/new/:userId', middleware, AdController.create)

router.post('/ads/:adsId/candidates/:userId/apply', middleware, ApplicantController.apply)
router.put('/ads/:adsId/candidates/:userId/select', middleware, AdController.selectCandidate)


// router.get('/ads/:adsId/candidates/', middleware, ApplicantController.index)
module.exports = router
