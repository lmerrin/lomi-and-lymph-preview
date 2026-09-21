const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  const sizeMenu = () => {
    if (nav.classList.contains('open') && window.innerWidth < 900) {
      const top = nav.getBoundingClientRect().top;
      nav.style.maxHeight = `${Math.max(240, window.innerHeight - top)}px`;
    } else {
      nav.style.maxHeight = '';
    }
  };

  const close = () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.querySelector('.sr-only').textContent = 'Open menu';
    document.body.classList.remove('menu-open');
    nav.style.maxHeight = '';
  };

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.querySelector('.sr-only').textContent = isOpen ? 'Close menu' : 'Open menu';
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) requestAnimationFrame(sizeMenu);
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) close();
    else sizeMenu();
  });

  const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = sectionLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setCurrent = id => {
    sectionLinks.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setCurrent(visible.target.id);
    }, { rootMargin: '-22% 0px -58% 0px', threshold: [0, .15, .35, .6] });
    sections.forEach(section => observer.observe(section));
  }

  sectionLinks.forEach(link => {
    link.addEventListener('click', () => setCurrent(link.getAttribute('href').slice(1)));
  });
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
