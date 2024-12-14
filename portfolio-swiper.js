import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const portfolioSwiper = new Swiper('.portfolio-swiper', {
    spaceBetween: 80,
    speed: 800,
    navigation: {
        nextEl: '.portfolio-button-next',
        prevEl: '.portfolio-button-prev',
    },
    pagination: {
        el: '.portfolio-pagination',
        clickable: true,
    },
});
