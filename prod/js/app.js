$(document).ready(function () {
  
  'use strict'
  
  // slider
  
  $('.main_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000    
  });
  
  $('.goods_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 6
  });
  $('.goods_slider').on('setPosition', function () {
    $(this).find('.slick-slide').height('auto');
	var slickTrack = $(this).find('.slick-track');
	var slickTrackHeight = $(slickTrack).height();
	$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
  });
  // menu
  
  $('.burger_menu').click(function (e) {
      e.preventDefault();
      $('.menu_popup_overlay').fadeIn(300).addClass('opened');
      $('body').css('overflow', 'hidden');  
    });
    $('.menu_popup_overlay').click(function (e) {
      $(this).fadeOut(200).removeClass('opened');
      $('body').css('overflow', 'auto'); 
    });
	$('.icon_close .icon').click(function (e) {
      e.preventDefault();
      $(this).parents('.menu_popup_overlay').fadeOut(200).removeClass('opened');
      $('body').css('overflow', 'auto'); 
    });
    $('.menu_content').click(function(e) {
		e.stopPropagation();
	});
  
  
  
})