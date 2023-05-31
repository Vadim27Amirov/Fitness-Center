import Swiper from '../vendor/swiper-bundle.min';

const coachSwiper = document.querySelector('.coach-swiper');

const addCoachSwiper = () => {
  if (!coachSwiper) {
    return;
  }

  const swiper = new Swiper(coachSwiper, {

    navigation: {
      nextEl: '.coach__button--next',
      prevEl: '.coach__button--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },

    watchOverflow: true,
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    watchSlidesProgress: true,
  });
  swiper.enable();

  if (document.querySelector('.feedback__swiper')) {
    const commentsSwiper = new Swiper('.feedback__swiper', { // eslint-disable-line
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 110,
      autoHeight: true,

      navigation: {
        nextEl: '.feedback__button--next',
        prevEl: '.feedback__button--prev',
      },
    });
  }
};

export {addCoachSwiper};
