const express = require('express');
const router = express.Router();
const middleware = require('../helpers/middleware');
const studyController = require('../controllers/studyController');

router.post('/init/study', middleware, studyController.initialChat);

module.exports = router;
