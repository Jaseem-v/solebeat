document.querySelector(".search_icon").addEventListener("click",(()=>{document.querySelector("#search").classList.add("active")})),document.querySelector("#close-search").addEventListener("click",(()=>{document.querySelector("#search").classList.remove("active")}));var swiper=new Swiper(".header_swiper",{spaceBetween:30,effect:"fade",navigation:{nextEl:"header .swiper-button-next",prevEl:"header .swiper-button-prev"},pagination:{el:"header .swiper-pagination",clickable:!0}}),swiper2=new Swiper(".client-swiper",{slidesPerView:2,spaceBetween:30,breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},990:{slidesPerView:5,spaceBetween:60},1400:{slidesPerView:6,spaceBetween:60}},autoplay:{delay:2500,disableOnInteraction:!1},loop:!0}),swiper3=new Swiper(".product-swiper",{slidesPerView:2,spaceBetween:30,navigation:{nextEl:".product-slider-btn-next",prevEl:".product-slider-btn-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40},990:{slidesPerView:4,spaceBetween:60},1400:{slidesPerView:4,spaceBetween:60}},loop:!1});$("input").focus((function(){$(this).parent().addClass("active"),$("input").focusout((function(){""==$(this).val()?$(this).parent().removeClass("active"):$(this).parent().addClass("active")}))})),$(window).on("scroll",(function(){$(window).scrollTop()>200?$("#navbar").addClass("sticky"):$("#navbar").removeClass("sticky")})),$('a[href^="#"]').on("click",(function(e){var t=this.hash,i=$(t);$("html, body").stop().animate({scrollTop:i.offset().top-70},200,"swing",(function(){window.location.hash=t}))}));const openBtn=document.querySelector("#hamburger-1"),closeBtn=document.querySelector("#hamburger-2"),nav_list=document.querySelector(".navigation__list"),overlay=document.querySelector(".overlay"),navContact=document.querySelector(".nav-contact");function mobileMenu(){openBtn.classList.add("active"),nav_list.classList.add("active"),overlay.classList.remove("hidden")}function mobileMenuClose(){openBtn.classList.remove("active"),nav_list.classList.remove("active"),overlay.classList.add("hidden")}overlay.classList.add("hidden"),openBtn.addEventListener("click",mobileMenu),closeBtn.addEventListener("click",mobileMenuClose),overlay.addEventListener("click",mobileMenuClose),$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>100?$("#scroll").fadeIn():$("#scroll").fadeOut()})),$("#scroll").click((function(){return $("html, body").animate({scrollTop:0},600),!1}))}));const imageWrapper=document.querySelector(".img-display-swiper"),animatedImage=imageWrapper.querySelectorAll(".AnimatedImage"),{offsetWidth:offsetWidth,offsetHeight:offsetHeight}=imageWrapper;let rafTimeout=null,callTimeout=null;const CalculateOrigin=e=>{const{offsetX:t,offsetY:i}=e,s=100/offsetWidth*t,n=100/offsetHeight*i;animatedImage.forEach((e=>{e.style.transformOrigin=`${Math.min(100,s)}% ${Math.min(100,n)}%`}))};imageWrapper.addEventListener("mousemove",(e=>{rafTimeout&&window.cancelAnimationFrame(rafTimeout),rafTimeout=window.requestAnimationFrame((()=>CalculateOrigin(e)))}));swiper3=new Swiper(".img-thumb-swiper",{loop:!0,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});var swiper4=new Swiper(".img-display-swiper",{loop:!0,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:swiper3}});const btnssdp=document.querySelectorAll(".sdp__quantity-btn");btnssdp.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault()}))}));