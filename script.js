
//this one is too make the introduction part more interactive and visible -->
document.addEventListener('DOMContentLoaded', () => {
  const introSection = document.querySelector('.intro');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        introSection.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });
  observer.observe(introSection);
});
//till here <----


//-----> this is for the about section 

document.addEventListener('DOMContentLoaded', () => {
  // About section reveal
  const aboutSection = document.querySelector('.about-hero');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });
  obs.observe(aboutSection);
});

// Updated script.js — Contact Form Submission & Local Storage

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msgContainer = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    const entry = {
      name: this.name.value.trim(),
      email: this.email.value.trim(),
      message: this.message.value.trim(),
      timestamp: new Date().toISOString()
    };

    // Load existing submissions, append new entry
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push(entry);
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Show confirmation message
    msgContainer.textContent = 'Thank you! Your message has been recorded.';
    msgContainer.style.color = '#ff6b81';

    // Reset form fields
    form.reset();
  });
});

