/* UAAMC shared site behavior */
(() => {
  const menuButton = document.querySelector('.menu-btn');
  const nav = document.querySelector('header nav');
  if (!menuButton || !nav) return;

  menuButton.setAttribute('aria-expanded', 'false');

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
    });
  });
})();
