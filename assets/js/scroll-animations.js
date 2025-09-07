// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
  // Create intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger, .slide-left, .slide-right, .scale-in, .rotate-in');
  
  scrollElements.forEach(el => {
    observer.observe(el);
  });

  // Add staggered animation to skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // Add staggered animation to project cards
  const projectCards = document.querySelectorAll('.project');
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
  });

  // Add staggered animation to experience items
  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
  });

  // Add staggered animation to social links
  const socialLinks = document.querySelectorAll('.socials a');
  socialLinks.forEach((link, index) => {
    link.style.transitionDelay = `${index * 0.1}s`;
  });

  // Add smooth scroll behavior for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--brand), var(--brand-2));
    z-index: 1000;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  // Update progress bar on scroll
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });

  // Add parallax effect to hero section
  const hero = document.querySelector('.custom-hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }

  // Add typing effect to hero title
  const heroTitle = document.querySelector('.custom-hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
  }
});
