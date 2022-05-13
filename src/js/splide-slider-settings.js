import Splide from '@splidejs/splide';

const optionsTheaterSponsorsSlider = {
  type: 'slide',
  autoplay: false,
  arrows: false,
  pagination: false,
  fixedWidth: '200px',
  fixedHeight: '300px',
  gap: '80px',
};

const optionsOurProductsSlider = {
  type: 'loop',
  autoplay: false,
  arrows: false,
  pagination: false,
  fixedWidth: '440px',
  fixedHeight: '550px',
  focus: 'center',
};

new Splide('.theater-sponsors__slider', optionsTheaterSponsorsSlider).mount();
new Splide('.our-productions__slider', optionsOurProductsSlider).mount();
