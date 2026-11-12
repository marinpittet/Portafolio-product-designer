(() => {
  const nodes = [...document.querySelectorAll('[data-media]')];
  for (const node of nodes) {
    const media = node.querySelector('img,video');
    if (!media) continue;
    const missing = () => node.classList.add('media-missing');
    if (media.tagName === 'IMG') {
      media.addEventListener('error', missing, {once: true});
      if (media.complete && !media.naturalWidth) missing();
    } else {
      media.addEventListener('error', missing, {once: true});
      if (!media.querySelector('source')) missing();
    }
  }
  const bar = document.getElementById('reading-progress');
  let pending = false;
  function progress() {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    bar.style.width = `${Math.min(100, Math.max(0, scrollY / max * 100))}%`;
    pending = false;
  }
  addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(progress); } }, {passive:true});
  addEventListener('resize', progress);
  progress();
  const nav = [...document.querySelectorAll('.chapter-nav a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        for (const a of nav) {
          if (a.getAttribute('href') === `#${entry.target.id}`) a.setAttribute('aria-current', 'location');
          else a.removeAttribute('aria-current');
        }
      }
    }, {rootMargin:'-10% 0px -68% 0px'});
    document.querySelectorAll('section.chapter[id]').forEach(section => observer.observe(section));
  }
  const player = document.getElementById('success-video');
  const toggle = document.getElementById('video-toggle');
  const sound = document.getElementById('sound-toggle');
  if (player && toggle && sound) {
    const videoContainer = player.closest('.motion-player');
    const unavailable = () => {
      videoContainer.classList.add('media-missing');
      toggle.disabled = sound.disabled = true;
      toggle.textContent = 'Video no disponible';
    };
    player.addEventListener('error', unavailable);
    player.querySelector('source')?.addEventListener('error', () => { if (player.networkState === 3) unavailable(); });
    const sync = () => {
      toggle.textContent = player.paused ? 'Reproducir' : 'Pausar';
      toggle.setAttribute('aria-pressed', String(!player.paused));
      sound.textContent = player.muted ? 'Activar sonido' : 'Silenciar';
      sound.setAttribute('aria-pressed', String(!player.muted));
    };
    toggle.addEventListener('click', () => {
      if (player.paused) player.play().catch(unavailable);
      else player.pause();
    });
    sound.addEventListener('click', () => { player.muted = !player.muted; sync(); });
    player.addEventListener('play', sync);
    player.addEventListener('pause', sync);
    player.addEventListener('ended', sync);
    sync();
  }
})();