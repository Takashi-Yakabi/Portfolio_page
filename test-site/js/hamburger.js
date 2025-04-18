$(function(){
  // ハンバーガーメニュー
  const btn = $('.nav-toggle');
  const navSns = $('.nav-and-sns');
  btn.on('click', function(){
    navSns.toggleClass('open');
    btn.toggleClass('active');
  });
  // Slick Slider 初期化
  $('.main-slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  });
});