// Services main page
exports.getServicesPage = (req, res) => {
  res.render('services/index', {
    title: 'Hizmetlerimiz | Zero Day Software',
    path: '/services'
  });
};

// Web Design service
exports.getWebDesignPage = (req, res) => {
  res.render('services/web-design', {
    title: 'Web Tasarım | Zero Day Software',
    path: '/services/web-design'
  });
};

// Custom Software Development service
exports.getCustomSoftwarePage = (req, res) => {
  res.render('services/custom-software', {
    title: 'Özel Yazılım Geliştirme | Zero Day Software',
    path: '/services/custom-software'
  });
};

// Mobile App Development service
exports.getMobileAppPage = (req, res) => {
  res.render('services/mobile-app', {
    title: 'Mobil Uygulama Geliştirme | Zero Day Software',
    path: '/services/mobile-app'
  });
};

// E-Commerce Systems service
exports.getECommercePage = (req, res) => {
  res.render('services/e-commerce', {
    title: 'E-Ticaret Sistemleri | Zero Day Software',
    path: '/services/e-commerce'
  });
};

// SEO & Digital Marketing service
exports.getSeoMarketingPage = (req, res) => {
  res.render('services/seo-marketing', {
    title: 'SEO & Dijital Pazarlama | Zero Day Software',
    path: '/services/seo-marketing'
  });
};

// API Integrations service
exports.getApiIntegrationsPage = (req, res) => {
  res.render('services/api-integrations', {
    title: 'API Entegrasyonları | Zero Day Software',
    path: '/services/api-integrations'
  });
};

// Technical Support service
exports.getTechnicalSupportPage = (req, res) => {
  res.render('services/technical-support', {
    title: 'Teknik Destek ve Danışmanlık | Zero Day Software',
    path: '/services/technical-support'
  });
}; 