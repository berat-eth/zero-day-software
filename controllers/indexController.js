// Home page
exports.getHomePage = (req, res) => {
  res.render('index', {
    title: 'Zero Day Software - Yazılım Ajansı',
    path: '/'
  });
};

// About page
exports.getAboutPage = (req, res) => {
  res.render('about', {
    title: 'Hakkımızda | Zero Day Software',
    path: '/about'
  });
};

// Portfolio page
exports.getPortfolioPage = (req, res) => {
  res.render('portfolio', {
    title: 'Referanslar | Zero Day Software',
    path: '/portfolio'
  });
};

// Blog page
exports.getBlogPage = (req, res) => {
  res.render('blog', {
    title: 'Blog | Zero Day Software',
    path: '/blog'
  });
}; 