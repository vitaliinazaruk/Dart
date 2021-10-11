const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");
var serviceOpenClass = 'service--open';
var serviceToggleClassName = 'service-toggle';
var services = document.querySelectorAll('.service');
var prevArrow = document.querySelector('.customers__prev');
var nextArrow = document.querySelector('.customers__next');
var arrowPrev = document.querySelector('.member__prev');
var arrowNext = document.querySelector('.member__next');
var photo = document.querySelector('.member__photo');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


function closeAllServices() {
  services.forEach(function(service) {
    service.classList.remove(serviceOpenClass)
  })
}

function handleClick(event) {
  closeAllServices();
  if (event.target.classList.contains(serviceToggleClassName)){
    if (this.classList.contains(serviceOpenClass)) {
      this.classList.remove(serviceOpenClass)
    }
    else {
      this.classList.add(serviceOpenClass);
    }
  }
}

services.forEach(function(element) {
   element.addEventListener('click', handleClick)
})



$(function(){
    $('.customers__carousel').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        autoplay: false,
        prevArrow: prevArrow,
        nextArrow: nextArrow,

        responsive: [
            {
              breakpoint: 1025,
              settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },

            {
                breakpoint: 769,
                settings: {
                  vertical: false,
                  verticalSwiping: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              }
        ]
    });
});

$(document).ready(function(){
  $('.members__carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: arrowPrev,
      nextArrow: arrowNext,
  });
});
