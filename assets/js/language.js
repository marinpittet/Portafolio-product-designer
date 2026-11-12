document.querySelectorAll('[data-language-link]').forEach(link => {
  link.addEventListener('click', event => {
    // Keep the reader in the same section when switching languages.
    if (!location.hash || location.hash === '#/') return;
    event.preventDefault();
    location.href = link.href + location.hash;
  });
});
