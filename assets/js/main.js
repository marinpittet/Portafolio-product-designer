(() => {
  const pages = {
    home: document.getElementById('page-home'),
    transferencias: document.getElementById('page-transferencias'),
  };
  const mobileNav = document.querySelector('.mobile-nav');
  function measureNavigation() {
    document.documentElement.style.setProperty('--mobile-nav-height', `${mobileNav.getBoundingClientRect().height}px`);
  }
  const navigationObserver = new ResizeObserver(measureNavigation);
  navigationObserver.observe(mobileNav);
  measureNavigation();
  function navigate() {
    const hash = location.hash || '#/';
    const page = hash.startsWith('#/transferencias') ? 'transferencias' : 'home';
    Object.entries(pages).forEach(([key, element]) => {
      element.classList.toggle('is-active', key === page);
      element.inert = key !== page;
    });
    document.querySelectorAll('.nav-links a, .mobile-nav .links a').forEach(link => {
      const target = link.getAttribute('href');
      const current = target === hash || (page === 'transferencias' && target === '#/transferencias');
      if (current) link.setAttribute('aria-current', target.startsWith('#/') ? 'page' : 'location');
      else link.removeAttribute('aria-current');
    });
    document.title = page === 'transferencias' ? 'TEF Santander app — Andrés Marín' : 'Andrés Marín — Product Designer';
    const section = page === 'home' && /^#[a-z]/.test(hash) ? document.getElementById(hash.slice(1)) : null;
    if (section) requestAnimationFrame(() => section.scrollIntoView());
    else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', navigate);
  navigate();
})();
