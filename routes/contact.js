const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Contact main page
router.get('/', contactController.getContactPage);

// Handle contact form submission
router.post('/', contactController.postContactForm);

module.exports = router; 