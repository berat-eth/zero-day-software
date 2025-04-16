// Packages main page
exports.getPackagesPage = (req, res) => {
  res.render('packages/index', {
    title: 'Paketler ve Fiyatlandırma | Zero Day Software',
    path: '/packages'
  });
};

// Starter package details
exports.getStarterPackagePage = (req, res) => {
  res.render('packages/starter', {
    title: 'Başlangıç Paketi | Zero Day Software',
    path: '/packages/starter'
  });
};

// Professional package details
exports.getProfessionalPackagePage = (req, res) => {
  res.render('packages/professional', {
    title: 'Profesyonel Paket | Zero Day Software',
    path: '/packages/professional'
  });
};

// E-Commerce package details
exports.getECommercePackagePage = (req, res) => {
  res.render('packages/e-commerce', {
    title: 'E-Ticaret Paketi | Zero Day Software',
    path: '/packages/e-commerce'
  });
}; 