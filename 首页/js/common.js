var swiper = new Swiper('.swiper-container', {
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});
console.log(swiper);

var item = document.querySelector('.header-item');
var box = document.querySelector('.header-item-box');
var timer = null;
item.onmouseenter = function() {
	clearTimeout(timer)
	box.style.display = 'block';
}
item.onmouseleave = function() {
	timer = setTimeout(function() {
		box.style.display = 'none';
	}, 100)
}
box.onmouseenter = function() {
	clearTimeout(timer)
	box.style.display = 'block';
}
box.onmouseleave = function() {
	box.style.display = 'none';
}

var phone = document.querySelector('.nav-phone');
var sub = document.querySelector('.sub-nav');
var toggle = document.querySelector('.toggle');
var timer = null;
phone.onmouseenter = function() {
	clearTimeout(timer)
	//	sub.style.display = 'block';
	$('.sub-nav').addClass('sub-nav-animation')
	$('.sub-nav').addClass('sub-nav-show')
	$('.header-wrapper').addClass('toggle')
	$('.nav li a').addClass('toggle-a')
	$('.logo a').css('background-image', 'url(images/logo2.png)')
	$('.header-item2').css('background-image', 'url(images/img40.png)')
	$('.header-item').css('background-image', 'url(images/img41.png)')
}
sub.onmouseleave = function() {
	//	$('.sub-nav').stop().slideToggle();
	timer = setTimeout(function() {
		//	sub.style.display = 'none';
		$('.sub-nav').removeClass('sub-nav-animation')
		$('.sub-nav').removeClass	('sub-nav-show')
		$('.header-wrapper').removeClass('toggle')
		$('.nav li a').removeClass('toggle-a')
		$('.logo a').css('background-image', '')
		$('.header-item2').css('background-image', '')
		$('.header-item').css('background-image', '')
	}, 100)
}
//sub.onmouseenter = function() {
//	clearTimeout(timer)
//	box.style.display = 'block';
//}
//sub.onmouseleave = function() {
//	box.style.display = 'none';
//}