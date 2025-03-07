const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    grabCursor: true,

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true, // Membuat scrollbar bisa di-drag
    },

    // Enable mousewheel scrolling
    mousewheel: {
        invert: false, // Agar scroll ke bawah pindah ke slide berikutnya
    },

    // Enable keyboard navigation
    keyboard: {
        enabled: true,
        onlyInViewport: true, // Navigasi hanya berfungsi jika swiper terlihat
    },
});
