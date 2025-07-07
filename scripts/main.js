// Smooth Scrolling Navigation
document.querySelectorAll('.navbar-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll-Triggered Fade-In Animations
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

faders.forEach(fader => appearOnScroll.observe(fader));

// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navbar-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
