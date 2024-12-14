import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

function getRotationValue(el) {
    const rotateMatch = el.style.transform.match(/rotate\(([^)]+)deg\)/);
    if (rotateMatch) {
        return rotateMatch[1];
    }
    return 90;
}

const onChnage = () => {
    const circle = document.querySelector('.benefits-mobile_circle');
    const currentRotate = getRotationValue(circle);

    if (swiper.swipeDirection === 'next') {
        circle.style.transform = `translate(50%, -50%) rotate(${
            Number(currentRotate) + 90
        }deg)`;
    } else {
        circle.style.transform = `translate(50%, -50%) rotate(${
            Number(currentRotate) - 90
        }deg)`;
    }
};

const swiper = new Swiper('.benefits-mobile', {
    pagination: {
        el: '.benefits-mobile-dots',
    },
    speed: 500,
    on: {
        slideChange: onChnage,
    },
});
