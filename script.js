const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  //   loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  slideToClickedSlide: true,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  autoHeight: true,

  slidesPerView: 3,

  watchOverflow: true,

  spaceBetween: 30,

  // количество перелистываемых слайдов
  slidesPerGroup: 1,

  centeredSlides: true,

  loop: true,

  // количество дублирующих слайдов (для корректности вывода с slidesPerView когда болле 1)
  // loopedSlice: 3,

  // freemode: true,

  autoplay: {
    delay: 3000,
    // stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 800,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  breakpoints: {
    320: {
      // slidesPerView: 1,
    },

    480: {},

    992: {},
  },

  preloadImages: false,

  lazy: {
    // подгружать на старте переключения слайда
    loadOnTransitionStart: false,
    // прогрузить предыдущую и следующую картинки
    loadPrevNext: false,
  },

  // слежка за видимыми слайдами
  watchSlidesProgress: true,
  // добавления класса видимым слайдам
  watchSlidesVisibility: true,

  zoom: {
    maxRatio: 3,
    minRatio: 1,
  },

  // доступность
  a11y: {
    enabled: true,
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    firstSlideMessage: "This is the first slide",
    lastSlideMessage: "This is the last slide",
    paginationBulletMessage: "Go to slide {{index}}",
    notificationClass: "swiper-notification",
    containerMessage: "",
    containerRoleDescriptionMessage: "",
    itemRoleDescriptionMessage: "",
  },
});
