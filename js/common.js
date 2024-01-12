/*
$(document).ready(function() {

	var stopVideos = function () {
		var videos = document.querySelectorAll('iframe, video');
		Array.prototype.forEach.call(videos, function (video) {
			if (video.tagName.toLowerCase() === 'video') {
				video.pause();
			} else {
				var src = video.src;
				video.src = src;
			}
		});
	};







	 $(function() {
		var $range = $(".range-catalog_price .range-catalog__input"),
		$from = $(".range-catalog_price .control-input__from"),
		$to = $(".range-catalog_price .control-input__to"),
		min = 1500,
		max = 200000;
		$range.ionRangeSlider({
			type: "double",
			min: min,
			max: max,
			from: 1500,
			to: 150000,
			postfix: " ₽",
			prettify_enabled: true,
			onChange: function(data) {
				updateValues()
			}
		});
		$range = $range.data("ionRangeSlider");
		var updateValues = function() {
			var res = $range.result;
			$from.val(res.from, true);
			$to.val(res.to,true)
		};
		$from.on("focus", function() {
			this.value = this.value;
			this.focus();
			this.selectionStart = this.value.length
		}).on("input", function() {
			$range.update({
				from: this.value
			})
		}).on("blur", updateValues);
		$to.on("focus", function() {
			this.value = this.value;
			this.focus();
			this.selectionStart = this.value.length
		}).on("input", function() {
			$range.update({
				to: this.value
			})
		}).on("blur", updateValues)
	});


	$(".btn-main_filter").click(function(e) {
		e.preventDefault();
		$(".sidebar-catalog").slideToggle(200);
	});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    	return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
		{
        	if ($(window).width() > 992) { 
        		$(".menu-dropdown").slideUp(200);
			$(".sandwich").removeClass("active");
        	}
        }
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	$('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

	//плавный скролл
	$(".navigat li a").mPageScroll2id();

	$("*[data-video-id]").modalVideo();


	//кнопка sandwich
	
	

	$(".menu-overlay").click(function() {
		$(".menu-dropdown").slideUp(200);
			$(".sandwich").removeClass("active");
			$(".menu-overlay").fadeOut(200);
			$(".header").removeClass("active");
	});

	{
		if ($(window).width() > 992) { 
			$(document).mouseup(function (e) {
				var container = $(".menu-dropdown");
				if (container.has(e.target).length === 0){
					$(".menu-dropdown").slideUp(200);
					$(".sandwich").removeClass("active");
					$(".menu-overlay").fadeOut(200);
					$(".header").removeClass("active");
				}
			});
		
		}
	}	

	$(".btn-like").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});

	//слайдер

	$('.slider-gallery').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false
				}
			}
			]
		});

	$('.item-catalog__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
	});

	$('.slider-card').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		speed: 1000,
		appendArrows: $(".controls-slider_card"),
		appendDots: $(".controls-slider_card"),
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
	});

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().parent().find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$(this).parent().parent().parent().find('.item-catalog__slider').slick('setPosition');
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});





*/
  players = new Array();

  function onYouTubeIframeAPIReady() {
	  var temp = $("iframe.yt_players");
	  for (var i = 0; i < temp.length; i++) {
		  var t = new YT.Player($(temp[i]).attr('id'), {
			  events: {
				  'onStateChange': onPlayerStateChange
			  }
		  });
		  players.push(t);
	  }
  
  }
  onYouTubeIframeAPIReady();
  
  
  function onPlayerStateChange(event) {
  
	  if (event.data == YT.PlayerState.PLAYING) {
		  //alert(event.target.getVideoUrl());
		 // alert(players[0].getVideoUrl());
		  var temp = event.target.getVideoUrl();
		  var tempPlayers = $("iframe.yt_players");
		  for (var i = 0; i < players.length; i++) {
			  if (players[i].getVideoUrl() != temp) players[i].stopVideo();
  
		  }
	  }
  }