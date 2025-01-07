document.addEventListener('scroll', function () {
    const element = document.querySelector('.nav');
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 50) {
        element.classList.add('nav-scrolled');
        if (window.matchMedia('(max-width: 576px)').matches) {
            document.querySelector('.nav-scrolled-btn').style.display = 'none';
        } else {
            document.querySelector('.nav-scrolled-btn').style.display = 'block';
        }
        document.querySelector('.nav_btn').style.background =
            'linear-gradient(112.33deg, #76BDFF -45.13%, #0C84F2 165.33%)';
    } else {
        element.classList.remove('nav-scrolled');
        document.querySelector('.nav-scrolled-btn').style.display = 'none';
        document.querySelector('.nav_btn').style.background = '#FFFFFF';
    }
    if (scrollPosition > 350) {
        document.querySelectorAll('.nav_link').forEach((element) => {
            element.style.color = '#000000';
        });
    } else {
        document.querySelectorAll('.nav_link').forEach((element) => {
            element.style.color = '#FFFFFF';
        });
    }
    if (scrollPosition > 780) {
        document.querySelector('.nav_subwrapper').style.color = '#000000';
        document.querySelector('.nav-scrolled').style.backgroundColor =
            '#ffffffcc';
        document.querySelectorAll('.nav_menu a').forEach((element) => {
            element.style.color = '#000000';
        });
        document.querySelector('.nav_language-switcher img').src =
            './icons/arrow_down-black.svg';
        document.querySelector('.nav_logo').src = './icons/logo_black.svg';
        document.querySelectorAll('.hamburger-span').forEach((element) => {
            element.style.backgroundColor = '#000000';
        });
    } else {
        document.querySelector('.nav_subwrapper').style.color = '#ffffff';
        document.querySelectorAll('.nav_menu a').forEach((element) => {
            element.style.color = '#ffffff';
        });
        document.querySelector('.nav_language-switcher img').src =
            './icons/arrow_down.svg';
        document.querySelector('.nav_logo').src = './icons/logo.svg';
        document.querySelectorAll('.hamburger-span').forEach((element) => {
            element.style.backgroundColor = '#ffffff';
        });
        document.querySelector('.nav-scrolled').style.backgroundColor =
            'transparent';
    }
});
