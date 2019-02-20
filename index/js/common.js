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

var bg = document.querySelector('.Gintama')
bg.onclick = function() {
	 location = "../shopcar/shopcar.html";
	console.log(111)
}
var bg = document.querySelector('.SteinsGate')
bg.onclick = function() {
	 location = "../login/login.html";
	console.log(111)
}
var bg = document.querySelector('.Unicorn')
bg.onclick = function() {
	 location = "../login/login.html";
	console.log(111)
}
var bg = document.querySelector('.Berserk')
bg.onclick = function() {
	 location = "../login/login.html";
	console.log(111)
}
var bg = document.querySelector('.SummerWars')
bg.onclick = function() {
	 location = "../login/login.html";
	console.log(111)
}
var bg = document.querySelector('.Akito')
bg.onclick = function() {
	 location = "../login/login.html";
	console.log(111)
}
var bg = document.querySelector('.Eva')
bg.onclick = function() {
	 location = "../login/login.html";
	console.log(111)
}



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

var item = document.querySelector('.header-item2');
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
//手机hover
var phone1 = document.querySelectorAll('.nav-phone')[0];
var sub1 = document.querySelector('.sub-nav');
var toggle1 = document.querySelector('.toggle');
var timer = null;
phone1.onmouseenter = function() {
	clearTimeout(timer)
	$('.sub-nav ul li a').eq(0).find('i').css({'background':'url(images/img39.jpg) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(1).find('i').css({'background':'url(images/img42.jpg) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(2).find('i').css({'background':'url(images/img43.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(3).find('i').css({'background':'url(images/img44.jpg) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(4).find('i').css({'background':'url(images/img46.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(5).find('i').css({'background':'url(images/icon09.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(6).find('i').css({'background':'url(images/img16.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(7).find('i').css({'background':'url(images/img43.png) no-repeat','background-size':'100%'})
	$('.sub-nav').addClass('sub-nav-animation')
	$('.sub-nav').addClass('sub-nav-show')
	$('.header-wrapper').addClass('toggle')
	$('.nav li a').addClass('toggle-a')
	$('.logo a').css('background-image', 'url(images/logo2.png)')
	$('.header-item2').css('background-image', 'url(images/img40.png)')
	$('.header-item').css('background-image', 'url(images/img41.png)')
	$('.header-item1').css('background-image', 'url(images/img23.png)')
}
sub1.onmouseleave = function() {
	timer = setTimeout(function() {
		$('.sub-nav ul li a').eq(0).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(1).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(2).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(3).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(4).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(5).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(6).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(7).find('i').css({'background':'','background-size':''})
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

//声学hover
var phone = document.querySelectorAll('.nav-phone')[1];
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
	$('.sub-nav ul li a').eq(0).find('i').css({'background':'url(images/img45.png) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(0).find('i').addClass('phone1')
	$('.sub-nav ul li a').eq(1).find('i').css({'background':'url(images/img47.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(2).find('i').css({'background':'url(images/img48.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(3).find('i').css({'background':'url(images/img59.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(4).find('i').css({'background':'url(images/img50.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(5).find('i').css({'background':'url(images/img51.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(6).find('i').css({'background':'url(images/img45.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(7).find('i').css({'background':'url(images/img47.png) no-repeat','background-size':'100%'})
	$('.logo a').css('background-image', 'url(images/logo2.png)')
	$('.header-item2').css('background-image', 'url(images/img40.png)')
	$('.header-item').css('background-image', 'url(images/img41.png)')
	$('.header-item1').css('background-image', 'url(images/img23.png)')
}
sub.onmouseleave = function() {
	//	$('.sub-nav').stop().slideToggle();
	timer = setTimeout(function() {
		//	sub.style.display = 'none';
		$('.sub-nav').removeClass('sub-nav-animation')
		$('.sub-nav').removeClass	('sub-nav-show')
		$('.header-wrapper').removeClass('toggle')
		$('.nav li a').removeClass('toggle-a')
		$('.sub-nav ul li a').eq(0).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(1).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(2).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(3).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(4).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(5).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(6).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(7).find('i').css({'background':'','background-size':''})
		$('.logo a').css('background-image', '')
		$('.header-item2').css('background-image', '')
		$('.header-item').css('background-image', '')
	}, 100)
}

//配件hover
var phone = document.querySelectorAll('.nav-phone')[2];
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
	$('.sub-nav ul li a').eq(0).find('i').css({'background':'url(images/img58.png) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(0).find('i').addClass('phone1')
	$('.sub-nav ul li a').eq(1).find('i').css({'background':'url(images/img55.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(2).find('i').css({'background':'url(images/img56.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(3).find('i').css({'background':'url(images/img57.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(4).find('i').css({'background':'url(images/img58.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(5).find('i').css({'background':'url(images/img49.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(6).find('i').css({'background':'url(images/img55.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(7).find('i').css({'background':'url(images/img56.png) no-repeat','background-size':'100%'})
	$('.logo a').css('background-image', 'url(images/logo2.png)')
	$('.header-item2').css('background-image', 'url(images/img40.png)')
	$('.header-item').css('background-image', 'url(images/img41.png)')
	$('.header-item1').css('background-image', 'url(images/img23.png)')
}
sub.onmouseleave = function() {
	//	$('.sub-nav').stop().slideToggle();
	timer = setTimeout(function() {
		//	sub.style.display = 'none';
		$('.sub-nav').removeClass('sub-nav-animation')
		$('.sub-nav').removeClass('sub-nav-show')
		$('.header-wrapper').removeClass('toggle')
		$('.nav li a').removeClass('toggle-a')
		$('.sub-nav ul li a').eq(0).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(1).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(2).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(3).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(4).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(5).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(6).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(7).find('i').css({'background':'','background-size':''})
		$('.logo a').css('background-image', '')
		$('.header-item2').css('background-image', '')
		$('.header-item').css('background-image', '')
	}, 100)
}
//生活hover
var phone = document.querySelectorAll('.nav-phone')[3];
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
	$('.sub-nav ul li a').eq(0).find('i').css({'background':'url(images/img53.jpg) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(1).find('i').css({'background':'url(images/img54.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(2).find('i').css({'background':'url(images/img52.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(3).find('i').css({'background':'url(images/img21.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(4).find('i').css({'background':'url(images/img53.jpg) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(5).find('i').css({'background':'url(images/img54.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(6).find('i').css({'background':'url(images/img52.png) no-repeat','background-size':'100%'})
	$('.sub-nav ul li a').eq(7).find('i').css({'background':'url(images/img21.png) no-repeat','background-size':'100%'})
	$('.logo a').css('background-image', 'url(images/logo2.png)')
	$('.header-item2').css('background-image', 'url(images/img40.png)')
	$('.header-item').css('background-image', 'url(images/img41.png)')
	$('.header-item1').css('background-image', 'url(images/img23.png)')
}
phone.onmouseleave = function() {
	timer = setTimeout(function() {
	$('.sub-nav').removeClass('sub-nav-animation')
		$('.sub-nav').removeClass('sub-nav-show')
		$('.header-wrapper').removeClass('toggle')
		$('.nav li a').removeClass('toggle-a')
		$('.logo a').css('background-image', '')
		$('.header-item2').css('background-image', '')
		$('.header-item').css('background-image', '')
		}, 200)
}
//sub.onmouseenter = function() {
//	clearTimeout(timer)
//	//	sub.style.display = 'block';
//	$('.sub-nav').addClass('sub-nav-animation')
//	$('.sub-nav').addClass('sub-nav-show')
//	$('.header-wrapper').addClass('toggle')
//	$('.nav li a').addClass('toggle-a')
//	$('.sub-nav ul li a').eq(0).find('i').css({'background':'url(images/img53.jpg) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(1).find('i').css({'background':'url(images/img54.png) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(2).find('i').css({'background':'url(images/img52.png) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(3).find('i').css({'background':'url(images/img21.png) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(4).find('i').css({'background':'url(images/img53.jpg) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(5).find('i').css({'background':'url(images/img54.png) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(6).find('i').css({'background':'url(images/img52.png) no-repeat','background-size':'100%'})
//	$('.sub-nav ul li a').eq(7).find('i').css({'background':'url(images/img21.png) no-repeat','background-size':'100%'})
//	$('.logo a').css('background-image', 'url(images/logo2.png)')
//	$('.header-item2').css('background-image', 'url(images/img40.png)')
//	$('.header-item').css('background-image', 'url(images/img41.png)')
//}
sub.onmouseleave = function() {
	//	$('.sub-nav').stop().slideToggle();
	timer = setTimeout(function() {
		//	sub.style.display = 'none';
		$('.sub-nav').removeClass('sub-nav-animation')
		$('.sub-nav').removeClass	('sub-nav-show')
		$('.header-wrapper').removeClass('toggle')
		$('.nav li a').removeClass('toggle-a')
		$('.sub-nav ul li a').eq(0).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(1).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(2).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(3).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(4).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(5).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(6).find('i').css({'background':'','background-size':''})
		$('.sub-nav ul li a').eq(7).find('i').css({'background':'','background-size':''})
		$('.logo a').css('background-image', '')
		$('.header-item2').css('background-image', '')
		$('.header-item').css('background-image', '')
	}, 100)
}
//APP下载hover
var app = document.querySelector('.app-up');
var up = document.querySelector('#meizu-header-sub-download');
var toggle = document.querySelector('.toggle');
var timer = null;
app.onmouseenter = function() {
	up.style.display = 'block';
	clearTimeout(timer)
	$('#meizu-header-sub-download').addClass('app-down-animation')
	$('.header-wrapper').addClass('toggle')
	$('.nav li a').addClass('toggle-a')
	$('.logo a').css('background-image', 'url(images/logo2.png)')
	$('.header-item2').css('background-image', 'url(images/img40.png)')
	$('.header-item').css('background-image', 'url(images/img41.png)')
	$('.header-item1').css('background-image', 'url(images/img23.png)')
}
app.onmouseleave = function() {
	timer = setTimeout(function() {
		up.style.display = 'none';
		$('#meizu-header-sub-download').removeClass('app-down-animation')
		$('.header-wrapper').removeClass('toggle')
		$('.nav li a').removeClass('toggle-a')
		$('.logo a').css('background-image', '')
		$('.header-item2').css('background-image', '')
		$('.header-item').css('background-image', '')
	}, 100)
}
up.onmouseenter = function() {
	up.style.display = 'block';
	clearTimeout(timer)
	$('#meizu-header-sub-download').addClass('app-down-animation')
	$('.header-wrapper').addClass('toggle')
	$('.nav li a').addClass('toggle-a')
	$('.logo a').css('background-image', 'url(images/logo2.png)')
	$('.header-item2').css('background-image', 'url(images/img40.png)')
	$('.header-item').css('background-image', 'url(images/img41.png)')
}
up.onmouseleave = function() {
	timer = setTimeout(function() {
		up.style.display = 'none';
		$('#meizu-header-sub-download').removeClass('app-down-animation')
		$('.header-wrapper').removeClass('toggle')
		$('.nav li a').removeClass('toggle-a')
		$('.logo a').css('background-image', '')
		$('.header-item2').css('background-image', '')
		$('.header-item').css('background-image', '')
	}, 100)
}


