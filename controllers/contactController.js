// Contact page
exports.getContactPage = (req, res) => {
  res.render('contact', {
    title: 'İletişim | Zero Day Software',
    path: '/contact'
  });
};

// Handle contact form submission
exports.postContactForm = (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Here you would normally send an email or save to database
  // For now, we'll just redirect with a success message
  
  res.render('contact', {
    title: 'İletişim | Zero Day Software',
    path: '/contact',
    success: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
  });
}; 