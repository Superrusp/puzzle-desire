if (window.matchMedia('(max-width: 768px)').matches) {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        const sections = document.querySelectorAll('section');
        const body = document.querySelector('body');
        sections.forEach((section) => {
            section.querySelectorAll('*').forEach((subChild) => {
                if (!subChild.closest('nav')) {
                    subChild.classList.toggle('d-none');
                }
            });
        });
        // document.querySelectorAll('.container')[0].classList.toggle('d-none');
        document.querySelector('.nav_list').classList.toggle('nav_list-mobile');
        document.querySelector('.nav').classList.toggle('nav-mobile');
        document
            .querySelectorAll('.container')[1]
            .classList.toggle('container-mobile');
        document.querySelector('.nav_btn').classList.toggle('nav_btn-active');
        if (hamburger.classList.contains('hamburger-active')) {
            body.style.overflow = 'visible';
            document.getElementById('container3D').style.opacity = 1;
            document.getElementById('back-to-top').style.display = 'flex';
        } else {
            body.style.overflow = 'hidden';
            document.getElementById('container3D').style.opacity = 0;
            document.getElementById('back-to-top').style.display = 'none';
        }

        hamburger.classList.toggle('hamburger-active');
    });
}

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
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let AllBenefits = document.querySelectorAll('.benefits_item');
    const onEntry = (entry) => {
        entry.forEach((change) => {
            if (change.isIntersecting) {
                change.target.classList.add('benefits_item--shown');
            } else {
                change.target.classList.remove('benefits_item--shown');
            }
        });
    };
    const options = { threhold: [0.5] };

    let observer = new IntersectionObserver(onEntry, options);
    for (const el of AllBenefits) {
        observer.observe(el);
    }
});

const modalButtons = document.querySelectorAll('.services_item');
const modals = document.querySelectorAll('.services_modal');
const modalCloses = document.querySelectorAll('.services_modal-close');
const modalsWrap = document.querySelector('.services_wrap');

modalButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        modals[i].classList.add('services_modal-active');
        if (window.matchMedia('(max-width: 768px)').matches) {
            modalsWrap.classList.add('services_wrap-active');
        }
    });
});

modalCloses.forEach((close) => {
    close.addEventListener('click', () => {
        modals.forEach((modal) => {
            modal.classList.remove('services_modal-active');
            if (window.matchMedia('(max-width: 768px)').matches) {
                modalsWrap.classList.remove('services_wrap-active');
            }
        });
    });
});

const whatsappIcon = document.querySelector('.whatsapp_icon');
const viberIcon = document.querySelector('.viber_icon');
const whatsappHover = document.querySelector('#whatsapp');
const viberHover = document.querySelector('#viber');

const phoneIcon = document.querySelector('.phone_icon');
const emailIcon = document.querySelector('.email_icon');
const emailHover = document.querySelector('.contacts_email');

// whatsappHover.addEventListener('mouseenter', () => {
//     whatsappIcon.src = './icons/whatsapp-hover.svg';
// });

// whatsappHover.addEventListener('mouseleave', () => {
//     whatsappIcon.src = './icons/whatsapp_contact.svg';
// });
// viberHover.addEventListener('mouseenter', () => {
//     viberIcon.src = './icons/viber-hover.svg';
// });
// viberHover.addEventListener('mouseleave', () => {
//     viberIcon.src = './icons/contacts_viber.svg';
// });
// phoneHover.addEventListener('mouseenter', () => {
//     phoneIcon.src = './icons/phone-hover.svg';
// });
// phoneHover.addEventListener('mouseleave', () => {
//     phoneIcon.src = './icons/phone.svg';
// });
// emailHover.addEventListener('mouseenter', () => {
//     emailIcon.src = './icons/email-hover.svg';
// });
// emailHover.addEventListener('mouseleave', () => {
//     emailIcon.src = './icons/mail.svg';
// });

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const sections = document.querySelectorAll('section');
    const body = document.querySelector('body');
    sections.forEach((section) => {
        section.querySelectorAll('*').forEach((subChild) => {
            if (!subChild.closest('nav')) {
                subChild.classList.toggle('d-none');
            }
        });
    });
    // document.querySelectorAll('.container')[0].classList.toggle('d-none');
    document.querySelector('.nav_list').classList.toggle('nav_list-mobile');
    document.querySelector('.nav').classList.toggle('nav-mobile');
    document
        .querySelectorAll('.container')[1]
        .classList.toggle('container-mobile');
    document.querySelector('.nav_btn').classList.toggle('nav_btn-active');

    body.style.overflow = 'visible';
    document.getElementById('container3D').style.opacity = 1;
    document.getElementById('back-to-top').style.display = 'flex';

    hamburger.classList.toggle('hamburger-active');
}

// Main button
const contactUsBtn = document.querySelector('.wrap_btn');
contactUsBtn.addEventListener('click', () => {
    document.querySelector('.bg-fullfill').classList.add('bg-fullfill-shown');
    const svg = document.querySelector('.contantUsSvg');
    svg.style.fill = 'black';

    setTimeout(() => {
        if (window.matchMedia('(max-width: 1120px)').matches) {
            window.location.href = '#contacts-mobile';
        } else {
            window.location.href = '#contacts';
        }

        document
            .querySelector('.bg-fullfill')
            .classList.remove('bg-fullfill-shown');
        svg.style.fill = '#fff';
    }, 1000);
});

// Benefits Wheel and scroll
const transform = (section) => {
    const offsetTop = section.parentElement.offsetTop;

    const benefitsCircle = document.querySelector('.benefits_circle');
    const scrollSection = section.querySelector('.benefits_scroll');

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 70;

    if (percentage > 0 && percentage < 140) {
        scrollSection.style.transform = `translate3d(0, ${-percentage}vh, 0)`;
        benefitsCircle.style.transform = `rotate(${percentage * 2}deg)`;
    }
};

window.addEventListener('scroll', () => {
    transform(document.querySelector('.benefits-wrapper'));

    const backToTopButton = document.getElementById('back-to-top');

    if (window.scrollY > 300) {
        backToTopButton.classList.add('back-to-top--show');
        backToTopButton.classList.remove('back-to-top--hide');
    } else {
        backToTopButton.classList.add('back-to-top--hide');
        backToTopButton.classList.remove('back-to-top--show');
    }
});

document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
