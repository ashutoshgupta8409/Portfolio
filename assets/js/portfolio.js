(function() {
  function onVisible(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const io = new IntersectionObserver(onVisible, { threshold: 0.15 });
    document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));
  });
})();


