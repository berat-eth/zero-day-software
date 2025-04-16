const express = require('express');
const router = express.Router();
const packagesController = require('../controllers/packagesController');

// Packages main page
router.get('/', packagesController.getPackagesPage);

// Starter package details
router.get('/starter', packagesController.getStarterPackagePage);

// Professional package details
router.get('/professional', packagesController.getProfessionalPackagePage);

// E-Commerce package details
router.get('/e-commerce', packagesController.getECommercePackagePage);

module.exports = router; 