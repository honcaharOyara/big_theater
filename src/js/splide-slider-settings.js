import Splide from '@splidejs/splide';

const optionsOurProductsSlider = {
  type: 'slide',
  autoplay: false,
  arrows: false,
  pagination: false,
  fixedWidth: '440px',
  fixedHeight: '550px',
  focus: 'center',
  drag: 'free',
  snap: true,
};

new Splide('.our-productions__slider', optionsOurProductsSlider).mount();

const optionsTheaterSponsorsSlider = {
  type: 'slide',
  autoplay: false,
  arrows: false,
  pagination: false,
  fixedWidth: '200px',
  fixedHeight: '300px',
  gap: '80px',
};

new Splide('.theater-sponsors__slider', optionsTheaterSponsorsSlider).mount();
