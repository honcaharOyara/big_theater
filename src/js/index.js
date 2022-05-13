import 'bootstrap/dist/js/bootstrap.bundle';
import './splide-slider-settings';
import formHandler from './form-handler';
import refs from './refs';

refs.navCloseBtn.addEventListener('click', () => {
  setTimeout(() => {
    refs.navbar.removeAttribute('style');
  }, 500);
});

refs.footerForm.addEventListener('submit', formHandler);
