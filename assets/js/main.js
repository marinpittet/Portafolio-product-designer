(() => {
  const mobileNav = document.querySelector('.mobile-nav');
  function measureNavigation() {
    document.documentElement.style.setProperty('--mobile-nav-height', `${mobileNav.getBoundingClientRect().height}px`);
  }
  const navigationObserver = new ResizeObserver(measureNavigation);
  navigationObserver.observe(mobileNav);
  measureNavigation();
  function navigate() {
    const hash = location.hash || '#/';
    if (hash.startsWith('#/transferencias')) {
      location.replace('./caso-tef/');
      return;
    }
    document.querySelectorAll('.nav-links a, .mobile-nav .links a').forEach(link => {
      const target = link.getAttribute('href');
      const current = target === hash;
      if (current) link.setAttribute('aria-current', target.startsWith('#/') ? 'page' : 'location');
      else link.removeAttribute('aria-current');
    });
    const section = /^#[a-z]/.test(hash) ? document.getElementById(hash.slice(1)) : null;
    if (section) requestAnimationFrame(() => section.scrollIntoView());
    else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', navigate);
  navigate();
})();

