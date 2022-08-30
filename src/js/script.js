$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          // dots: true,
          arrows: false
        }
      }
      
    ]
  });
});