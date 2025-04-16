const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

// Services main page
router.get('/', servicesController.getServicesPage);

// Web Design service
router.get('/web-design', servicesController.getWebDesignPage);

// Custom Software Development service
router.get('/custom-software', servicesController.getCustomSoftwarePage);

// Mobile App Development service
router.get('/mobile-app', servicesController.getMobileAppPage);

// E-Commerce Systems service
router.get('/e-commerce', servicesController.getECommercePage);

// SEO & Digital Marketing service
router.get('/seo-marketing', servicesController.getSeoMarketingPage);

// API Integrations service
router.get('/api-integrations', servicesController.getApiIntegrationsPage);

// Technical Support service
router.get('/technical-support', servicesController.getTechnicalSupportPage);

module.exports = router; 