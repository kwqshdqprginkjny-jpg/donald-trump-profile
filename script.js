const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-menu');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu?.classList.toggle('is-open', !open);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  });
});

const suggestionTrigger = document.querySelector('.suggestion-trigger');
const taxDialog = document.querySelector('#tax-dialog');
const taxDialogClose = document.querySelector('.tax-dialog-close');

suggestionTrigger?.addEventListener('click', () => {
  toggle?.setAttribute('aria-expanded', 'false');
  menu?.classList.remove('is-open');
  taxDialog?.showModal();
});

taxDialogClose?.addEventListener('click', () => taxDialog?.close());
taxDialog?.addEventListener('click', (event) => {
  if (event.target === taxDialog) taxDialog.close();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll('.timeline-item').forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(24px)';
  item.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(item);
});

const style = document.createElement('style');
style.textContent = '.timeline-item.in-view{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);

