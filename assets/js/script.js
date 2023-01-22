$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // setTimeout(function () {
  //   $(window).trigger("scroll");
  //   AOS.init();
  // }, 200);
});
