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
    slidesToScroll: 6,
     responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
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

  // matchHeight

  $('.goods_block .col').matchHeight();
  
  // zoom on droduct page
  
  $('.my-foto-container').imagezoomsl({
    zoomstart: 2,
    innerzoom: true,
    magnifierborder: 'none',
    magnifycursor: 'url(../img/icons/icon_search.png),pointer'
  });	  
    $('.my-foto').click(function(){
      
      $(this).addClass('active').siblings().removeClass('active');
      var that = this;
      $('.my-foto-container').fadeOut(600, function(){
      $(this).attr('src',             $(that).attr('src'))              // путь до small картинки
            .attr('data-large',     $(that).attr('data-large'))       // путь до big картинки					
            .fadeIn(1000);				
    });
  });
  
  // dropdown
  
  $('.js-options').on('click', function(){
    var dropdown = $(this).parent('.item_info').find('.hidden_block');
    if($(this).hasClass('edit')){
      $(this).removeClass('edit');
      dropdown.slideDown(300);
    }else{
      $(this).addClass('edit');
      dropdown.slideUp(300);
    }
  });
  
  // calc
  
  function number() {
    var number = $(".js-number");
    number.each(function () {
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus-number");
      var minus = $(this).find(".js-minus-number");
      plus.on("click", function () {
        var val = +(input.val());
        if (val >= max_number) {
          return false
        }
        else {
          val += 1;
          input.val(val);
        }
      });
      minus.on("click", function () {
        var val = +(input.val());
        if (val > 1) {
          val -= 1;
          input.val(val);
        }
        return false;
      });
      input.on("change", function () {
        var val = +$(this).val();
        if (val > max_number) {
          val = max_number;
          $(this).val(val);
        }
        if (val == '') {
          val = 1;
          $(this).val(val);
        }
      });
    });
  }
  number();
  
  // search header
  
  $('.js-search_header').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('close').parent('.search_header').find('.search_block').toggleClass('visible');
  });
  
})