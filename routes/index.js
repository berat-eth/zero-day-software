const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Home page route
router.get('/', indexController.getHomePage);

// About page route
router.get('/about', indexController.getAboutPage);

// Portfolio page route
router.get('/portfolio', indexController.getPortfolioPage);

// Blog page route
router.get('/blog', indexController.getBlogPage);

module.exports = router; 