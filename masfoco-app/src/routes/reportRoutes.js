// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// GET single report by ID
router.get('/:id', reportController.getReport);

// GET all reports
router.get('/', reportController.getReports);

// POST create a new report
router.post('/', reportController.createReport);

// DELETE a report by ID
router.delete('/:id', reportController.deleteReport);

module.exports = router;
