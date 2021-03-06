/*Global variables*/
function nightMode() {
    const toggleSwitch = document.querySelector('.night-mode-input');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
}

function menuBtn() {
    var menu = jQuery('.header-menu');
    var btn = jQuery('.menu-toggle');

    btn.click(function (e) {
        e.preventDefault();
        menu.toggleClass('on');
        jQuery(this).toggleClass('on')
    });
}

function scrollEl() {
    jQuery('.go_to a').click(function () {
        let scroll_el = jQuery(this).attr('href');
        if (jQuery(scroll_el).length !== 0) {
            jQuery('html, body').animate({scrollTop: jQuery(scroll_el).offset().top}, 500);
        }
        return false;
    });
}

function stickyDiv() {
    var sticky = new Sticky('.anchor-menu');
}

function returnToTop() {
    let btn = jQuery('.btn-top');
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() >= 50) {
            btn.fadeIn(200);
        } else {
            btn.fadeOut(200);
        }
    });
    btn.click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
    });
}

function slotScreensSlider() {
    swiper = new Swiper('.screens-carousel', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        pagination: {
            el: '.screens-pagination',
            clickable: true,
        },
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            }
        },
    });
}

function mainSlider() {
    swiper = new Swiper('.slider .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: true,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.slider-pagination',
            clickable: true,
        }
    });
}

function maximize() {
    let $frame = jQuery('.main-game-frame');
    let $btn = jQuery('.btn-maximize');
    $btn.on('click', function () {
        $frame.toggleClass('fullscreen');
    })
}

function openPopup() {
    jQuery('.open-popup').magnificPopup({
        type: 'inline',

        fixedContentPos: true,
        fixedBgPos: true,

        overflowY: 'hidden',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        focus: 'input[type=tel]'
    });
}

function initEvents() {

    /*Actions on 'DOM ready' event*/
    jQuery(function () {
        nightMode();
        mainSlider();
        menuBtn();
        scrollEl();
        stickyDiv();
        returnToTop();
        slotScreensSlider();
        maximize();
        openPopup();
    });

    jQuery(window).resize(function () {

    });

}

/*Start all functions and actions*/
initEvents();
