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










/////////////////////////////
////

// const imgs = document.querySelectorAll('.img-select a');
// const imgBtns = [...imgs];
// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//     imgItem.addEventListener('click', (event) => {
//         event.preventDefault();
//         imgId = imgItem.dataset.id;
//         slideImage();
//     });
// });

// function slideImage() {
//     const displayWidth = document.querySelector('.img-showcase .ImageWrapper:first-child').clientWidth;

//     document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
// }

// window.addEventListener('resize', slideImage);


/// store the wrapper HTMLElement into a constant
const imageWrapper = document.querySelector('.img-display-swiper');
const animatedImage = imageWrapper.querySelectorAll('.AnimatedImage');
/// then get the width and height properties
const { offsetWidth, offsetHeight } = imageWrapper;
/// create a timeout handler for requestAnimationFrame
let rafTimeout = null, callTimeout = null;
const CalculateOrigin = (event) => {
    /// get local cursor offset
    const { offsetX, offsetY } = event;
    /// we know than transform-origin centered is equal to 50% 50%
    /// so we need to handle this position with the delta between
    /// mouse position and wrapper bounds

    /// calculate deltas
    const deltaX = (100 / offsetWidth) * offsetX;
    const deltaY = (100 / offsetHeight) * offsetY;
    /// apply the style property to the image
    animatedImage.forEach(el => {
        el.style.transformOrigin = `${Math.min(100, deltaX)}% ${Math.min(100, deltaY)}%`
    })

    // 
}

/// add an event listener
imageWrapper.addEventListener('mousemove', (event) => {
    if (rafTimeout) {
        window.cancelAnimationFrame(rafTimeout);
    }
    /// use requestAnimationFrame for event debouncing and animation frame improvements
    rafTimeout = window.requestAnimationFrame(() => CalculateOrigin(event));
});





//////////////////////////////////////////////////
//////

var swiper3 = new Swiper(".img-thumb-swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper4 = new Swiper(".img-display-swiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
});



///////////////////////////////

const btnssdp = document.querySelectorAll(".sdp__quantity-btn")

btnssdp.forEach(el=>{
    el.addEventListener('click',e=>{
        e.preventDefault()
        // if(e.target.dataset.value
    })
})
