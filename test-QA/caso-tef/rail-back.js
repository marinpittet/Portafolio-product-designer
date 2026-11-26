const headerBack = document.querySelector('.topbar .back-link');
const railBack = document.querySelector('.rail-back');

if (headerBack && railBack && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    railBack.hidden = entry.isIntersecting || entry.boundingClientRect.bottom > 0;
  });
  observer.observe(headerBack);
}
