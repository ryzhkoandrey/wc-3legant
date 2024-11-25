// =============== TAGLINE ===============

const tagline = document.querySelector('.tagline');
const closeTaglineBtn = document.querySelector('.tagline__close');

closeTaglineBtn.onclick = function () {
    tagline.remove();
};

// =============== MOBILE NAV ===============

const nav = document.querySelector('.mobile-nav');
const navBtn = document.querySelector('#mobile-nav-btn');
const navFade = document.querySelector('.mobile-nav-fade');
const closeBtn = document.querySelector('#close-mobile-nav');

navBtn.onclick = toggleMobileNav;
navFade.onclick = toggleMobileNav;
closeBtn.onclick = toggleMobileNav;

function toggleMobileNav() {
    nav.classList.toggle('mobile-nav--open');
    navFade.classList.toggle('mobile-nav-fade--active');
    document.body.classList.toggle('no-scroll');
}

// =============== ARRIVALS (swiper) ===============

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        821: {
            spaceBetween: 24,
        }
    },
});

// =============== PROMOTION (timer) ===============

const endDate = new Date();
endDate.setDate(endDate.getDate() + 3);

const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

let timerInterval;

function updateTimer() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
        daysElement.innerText = '0';
        hoursElement.innerText = '0';
        minutesElement.innerText = '0';
        secondsElement.innerText = '0';
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.innerText = days.toString().padStart(2, '0');
    hoursElement.innerText = hours.toString().padStart(2, '0');
    minutesElement.innerText = minutes.toString().padStart(2, '0');
    secondsElement.innerText = seconds.toString().padStart(2, '0');
};

updateTimer();
timerInterval = setInterval(updateTimer, 1000);