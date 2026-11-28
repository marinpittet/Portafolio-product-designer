(() => {
  const home = document.querySelector('.editorial-home');
  const header = document.querySelector(home ? '.mobile-nav' : '.topbar');
  const disclosures = [...document.querySelectorAll('[data-disclosure]')].map(button => ({
    button,
    panel: document.getElementById(button.getAttribute('aria-controls'))
  }));

  function close({ button, panel }, restoreFocus = false) {
    button.setAttribute('aria-expanded', 'false');
    if (restoreFocus) button.focus({ preventScroll: true });
    panel.hidden = true;
  }

  for (const disclosure of disclosures) {
    const { button, panel } = disclosure;
    button.addEventListener('click', () => {
      if (!panel.hidden) {
        close(disclosure);
        return;
      }
      disclosures.forEach(item => close(item));
      button.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
      panel.scrollTop = 0;
      panel.querySelector('[aria-current]')?.scrollIntoView({ block: 'nearest', behavior: 'instant', container: 'nearest' });
    });
    panel.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      close(disclosure, true);
      const destination = link.hash && document.getElementById(link.hash.slice(1));
      if (destination) {
        destination.setAttribute('tabindex', '-1');
        destination.focus({ preventScroll: true });
      }
    });
  }

  document.addEventListener('click', event => {
    for (const item of disclosures) {
      if (!item.panel.hidden && !item.panel.contains(event.target) && !item.button.contains(event.target)) close(item);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    for (const item of disclosures) {
      if (!item.panel.hidden) {
        event.preventDefault();
        close(item, true);
      }
    }
  });
  for (const query of ['(width >= 599px)', '(width >= 1024px)']) {
    matchMedia(query).addEventListener('change', () => disclosures.forEach(item => close(item)));
  }

  if (home) {
    const routeHome = () => {
      if (location.hash.startsWith('#/transferencias')) {
        location.replace(document.documentElement.lang === 'en' ? './caso-tef/index.en.html' : './caso-tef/');
      } else if (location.hash === '#/') {
        window.scrollTo(0, 0);
      }
    };
    addEventListener('hashchange', routeHome);
    routeHome();
  }

  const selector = home
    ? '.nav-links a[href^="#"], .tablet-links a[href^="#"], .home-nav-panel a[href^="#"]'
    : '.chapter-nav a[href^="#"]';
  const links = [...document.querySelectorAll(selector)];
  if (!links.length) return;

  const projects = ['#tef', '#analisis-ia', '#juego-rol'];
  const anchors = [...new Set(links.map(link => link.hash))]
    .map(hash => ({ hash, section: document.getElementById(hash.slice(1)) }))
    .filter(item => item.section);
  anchors.sort((a, b) => a.section.compareDocumentPosition(b.section) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
  let scheduled = false;

  function updateActive() {
    scheduled = false;
    const top = (header?.getBoundingClientRect().height || 0) + 32;
    let active = home ? '#/' : '';
    for (const { hash, section } of anchors) {
      if (section.getBoundingClientRect().top <= top) active = hash;
    }
    const last = anchors.at(-1);
    if (last && scrollY > 0 && scrollY + innerHeight >= document.documentElement.scrollHeight - 2) active = last.hash;
    const inProjects = active === '#proyectos' || projects.includes(active);
    for (const link of links) {
      const isParent = link.hash === '#proyectos' && !link.closest('.tablet-panel');
      const current = isParent ? inProjects : link.hash === active;
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    const tabletToggle = document.querySelector('.case-group-toggle');
    tabletToggle?.classList.toggle('is-current', inProjects);
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateActive);
  }

  addEventListener('scroll', scheduleUpdate, { passive: true });
  addEventListener('resize', scheduleUpdate);
  addEventListener('hashchange', scheduleUpdate);
  addEventListener('load', scheduleUpdate);
  updateActive();
})();
