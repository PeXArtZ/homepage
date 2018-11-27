import Index from '../pages/index.js'

const Function = () => (

$(window).on('scroll', function() {

    if ($(document).scrollTop() > 50) {
        $('.global-nav').addClass('move');
    }

    else {
        $('.global-nav').removeClass('move');
    }
}),

$(window).on('scroll', function() {

    if ($(document).scrollTop() > 50) {
        $('.site-nav').addClass('move-site');
    }

    else {
        $('.site-nav').removeClass('move-site');
    }
}),

$(window).on('scroll', function() {

    if ($(document).scrollTop() > 50) {
        $('.mobile-global-nav').addClass('move-mobile');
    }

    else {
        $('.mobile-global-nav').removeClass('move-mobile');
    }
}),

$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('.navbar');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp-global-pp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp-global-pp");
      }
      c = currentScrollTop;
  });
  
}),

$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('.site-pp');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp-site-pp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp-site-pp");
      }
      c = currentScrollTop;
  });
  
}),

function openNav() {
    document.getElementById("menu-mobile").style.width = "25rem";
},
function closeNav() {
    document.getElementById("menu-mobile").style.width = "0";
}
)
 
export default Index 