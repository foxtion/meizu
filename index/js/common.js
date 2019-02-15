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
	},100)
}
box.onmouseenter = function() {
	clearTimeout(timer)
	box.style.display = 'block';
}
box.onmouseleave = function() {
	box.style.display = 'none';
}

var item = document.querySelector('.a');
var box = document.querySelector('.sub-nav');
var timer = null;
item.onmouseenter = function() {
	clearTimeout(timer)
	box.style.display = 'block';
	$('.header-wrapper').addClass('toggle')
	$('.header-wrapper').style.color = red;
}
item.onmouseleave = function() {
	timer = setTimeout(function() {
	box.style.display = 'none';
	},100)
}
box.onmouseenter = function() {
	clearTimeout(timer)
	box.style.display = 'block';
}
box.onmouseleave = function() {
	box.style.display = 'none';
}

