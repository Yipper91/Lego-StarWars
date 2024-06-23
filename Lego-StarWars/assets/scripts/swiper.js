var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '2',
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
        scale: 0,
    },
    breakpoints: {
        600: {
            slidesPerView: '1',
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// === LEGO HAND CURSOR ===
document.addEventListener("mousemove", function(e) {
    const hand = document.querySelector(".hand");
    hand.style.left = e.pageX + 'px';
    hand.style.top = e.pageY + 'px';
});