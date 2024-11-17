// ---------- TAGLINE ----------

const tagline = document.querySelector('.tagline');
const closeTaglineBtn = document.querySelector('.tagline__close');

closeTaglineBtn.onclick = function () {
    tagline.remove();
};

// ---------- ARRIVALS: SWIPER ----------


const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    freeMode: true,
    pagination: {
        el: '.dots',
        clickable: true,
    },
});