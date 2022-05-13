import 'bootstrap/dist/js/bootstrap.bundle';
const bootstrap = require('bootstrap');
import refs from './refs';

refs.navCloseBtn.addEventListener('click', () => {
  setTimeout(() => {
    refs.navbar.removeAttribute('style');
  }, 500);
});

var myCarousel = document.querySelector('#our-productions__slider');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
});

console.dir(carousel);
