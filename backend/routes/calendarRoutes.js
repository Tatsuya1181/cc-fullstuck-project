const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.get('/goals', calendarController.getAllGoals);

module.exports = router;
