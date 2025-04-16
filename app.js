const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const ejsLayouts = require('express-ejs-layouts');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set layout
app.use(ejsLayouts);
app.set('layout', './layouts/main');
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const indexRoutes = require('./routes/index');
const servicesRoutes = require('./routes/services');
const packagesRoutes = require('./routes/packages');
const contactRoutes = require('./routes/contact');

// Use routes
app.use('/', indexRoutes);
app.use('/services', servicesRoutes);
app.use('/packages', packagesRoutes);
app.use('/contact', contactRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).render('404', {
    title: '404 - Sayfa Bulunamadı',
    path: req.url
  });
});

// Set port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
}); 