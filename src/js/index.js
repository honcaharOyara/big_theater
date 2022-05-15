import 'bootstrap/dist/js/bootstrap.bundle';
import './splide-slider-settings';
import formHandler from './form-handler';
import refs from './refs';

refs.navCloseBtn.addEventListener('click', () => {
  setTimeout(() => {
    refs.navbar.removeAttribute('style');
  }, 500);
});

window.addEventListener('scroll', () => {
  window.pageYOffset > 0
    ? refs.scrollupBtn.classList.replace('invisible', 'visible')
    : refs.scrollupBtn.classList.replace('visible', 'invisible');
});

refs.footerForm.addEventListener('submit', formHandler);
