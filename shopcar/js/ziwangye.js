var ziwangye = (function() {
	var index;
	return {
		init() {
			localStorage.clear();
			this.event();
			var $xinhao = document.querySelector('.xinhao');
			var $prop = $xinhao.children;
			var $ysfl = document.querySelector('.ysfl');
			var $ys = $ysfl.children;
			var $ncrl = document.querySelector('.ncrl');
			var $nc = $ncrl.children;
			var $xztc = document.querySelector('.xztc');
			var $tc = $xztc.children;
			for(let i = 0; i < $prop.length; i++) {
				$prop[i].index = i;
			}
			for(let i = 0; i < $ys.length; i++) {
				$ys[i].index = i;
			}
			for(let i = 0; i < $nc.length; i++) {
				$nc[i].index = i;
			}
			for(let i = 0; i < $tc.length; i++) {
				$tc[i].index = i;
			}
		},
		event() {
			var _this = this;
			_this.toubu();
			var $xinhao = document.querySelector('.xinhao');
			var $prop = $xinhao.children;
			var $ysfl = document.querySelector('.ysfl');
			var $ys = $ysfl.children;
			var $ncrl = document.querySelector('.ncrl');
			var $nc = $ncrl.children;
			var $xztc = document.querySelector('.xztc');
			var $tc = $xztc.children;
			
			var name = $('.xinhao .selected').text();
			var col = $('.ysfl .selected').text();
			var nc = $('.ncrl .selected').text();
			var tc = $('.xztc .selected').text();
			$xinhao.addEventListener('click', function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName === 'A') {
					index = target.index;
					for(let i = 0; i < $prop.length; i++) {
						$prop[i].classList.remove('selected');
					};
					$prop[index].classList.add('selected');
				}
				}, false)
			$ysfl.addEventListener('click', function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName === 'A') {
					index = target.index;
					for(let i = 0; i < $ys.length; i++) {
						$ys[i].classList.remove('selected');
					};
					$ys[index].classList.add('selected'); 
				}
				}, false)
			$ncrl.addEventListener('click', function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName === 'A') {
					index = target.index;
					for(let i = 0; i < $nc.length; i++) {
						$nc[i].classList.remove('selected');
						// $tipAll[i].className.replace('active', '');
					};
					$nc[index].classList.add('selected');
				}
				}, false)
			$xztc.addEventListener('click', function(e) {
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.nodeName === 'A') {
					index = target.index;
					for(let i = 0; i < $tc.length; i++) {
						$tc[i].classList.remove('selected');
						// $tipAll[i].className.replace('active', '');
					};
					$tc[index].classList.add('selected');
				}
				}, false)
			// var $jian = document.querySelector('.vm-minus');
			// var $jia = document.querySelector('.vm-plus');
			// var $inp = document.querySelector('.inp-sl');
			// $jian.onclick = function(){
			// 	$inp.value--;
			// 	if($inp.value < 2){
			// 		$jian.classList.add('disabled')
			// 	}
			// }
			// $jia.onclick = function(){
			// 	$inp.value++;
			// 	if($inp.value > 1){
			// 		$jian.classList.remove('disabled')
			// 	}
			// }
			var $btn_empty = document.querySelector('.btn-empty');
			$btn_empty.onclick = function(){
				name = $('.xinhao .selected').text();
				col = $('.ysfl .selected').text();
				nc = $('.ncrl .selected').text();
				tc = $('.xztc .selected').text();
				localStorage.tc = tc ;
				localStorage.nc = nc;
				localStorage.col = col;
				localStorage.name = name;
				alert('加入购物车成功');
			}
			var $btn_primary = document.querySelector('.btn-primary');
			$btn_primary.onclick = function(){
				name = $('.xinhao .selected').text();
				col = $('.ysfl .selected').text();
				nc = $('.ncrl .selected').text();
				tc = $('.xztc .selected').text();
				localStorage.tc = tc ;
				localStorage.nc = nc;
				localStorage.col = col;
				localStorage.name = name;
			}
		},
			
		toubu() {
			var $tb = document.querySelector('.fast-nav');
			// 小盒子距离顶部的高度
			document.body.onscroll = function() {
				// 滚动高度
				var top = document.documentElement.scrollTop
				if(top > 80) {
					$tb.className = 'fixeds fast-nav';
				}
				if(top < 80) {
					$tb.className = 'fast-nav'
				}
			}
		},

	}
}())
ziwangye.init();