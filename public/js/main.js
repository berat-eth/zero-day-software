document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
        navbar.classList.remove('py-3');
      } else {
        navbar.classList.remove('shadow-sm');
        navbar.classList.add('py-3');
      }
    });
  }
  
  // Add animation classes when elements come into view
  const animatedElements = document.querySelectorAll('.card, .section-heading, .testimonial-item, .contact-form');
  
  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Form validation
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('is-invalid');
        } else {
          field.classList.remove('is-invalid');
        }
      });
      
      // Email validation
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && !validateEmail(emailField.value) && emailField.value.trim()) {
        isValid = false;
        emailField.classList.add('is-invalid');
      }
      
      if (!isValid) {
        event.preventDefault();
      }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (input.hasAttribute('required') && !input.value.trim()) {
          input.classList.add('is-invalid');
        } else if (input.type === 'email' && !validateEmail(input.value) && input.value.trim()) {
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });
      
      input.addEventListener('input', function() {
        input.classList.remove('is-invalid');
      });
    });
  }
  
  // Helper functions
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('.accordion-item');
  
  if (faqItems.length > 0) {
    faqItems.forEach((item, index) => {
      const button = item.querySelector('.accordion-button');
      const collapse = item.querySelector('.accordion-collapse');
      
      button.addEventListener('click', function() {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
          button.setAttribute('aria-expanded', 'false');
          collapse.classList.remove('show');
        } else {
          button.setAttribute('aria-expanded', 'true');
          collapse.classList.add('show');
        }
      });
    });
  }
  
  // Mobile menu toggle
  const menuToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (menuToggler && navbarCollapse) {
    menuToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbarCollapse.contains(event.target) && !menuToggler.contains(event.target) && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  }
}); 