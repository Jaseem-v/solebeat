var swiper = new Swiper(".header_swiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: "header .swiper-button-next",
        prevEl: "header .swiper-button-prev",
    },
    pagination: {
        el: "header .swiper-pagination",
        clickable: true,
    },
});


// //////////////////////
// clients 

var swiper2 = new Swiper(".client-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 5,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 60,
        }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});

var swiper3 = new Swiper(".product-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 60,
        }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});


////////////////////////

$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});

///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});



//////////////////////////////////////////
// Navbar-scroll

$('a[href^="#"]').on('click', function (e) {
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 70
    }, 200, 'swing', function () {
        window.location.hash = target;
    });
});


/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector("#hamburger-1")
const closeBtn = document.querySelector("#hamburger-2")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")
overlay.classList.add("hidden")

function mobileMenu() {
    openBtn.classList.add("active");
    nav_list.classList.add("active")
    overlay.classList.remove("hidden")
}
function mobileMenuClose() {
    openBtn.classList.remove("active");
    nav_list.classList.remove("active")
    overlay.classList.add("hidden")
}


openBtn.addEventListener("click", mobileMenu)
closeBtn.addEventListener("click", mobileMenuClose)
overlay.addEventListener("click", mobileMenuClose)

/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});








