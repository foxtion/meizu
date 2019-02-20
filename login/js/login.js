var $from = document.querySelector('.form-box');
		var $username = $from['username'];

		var $password = $from['password'];
		var $p = document.querySelector('.l');
		var $zzyz = document.querySelector('.zzyz');
		var $cha = document.querySelector('.cha');
		var $show = document.querySelector('.show');
		var $hold = document.querySelector('.hold1');
		var $show1 = document.querySelector('.show1');
		var $hold1 = document.querySelector('.hold');
		var $denglu = document.querySelector('.denglu');
		var $ma = document.querySelector('.ma');
		var $btn = document.querySelector('.btn');
		$cha.onclick = function(){
			$zzyz.style.display = 'none';
		}
		$show.onclick = function() {
			$denglu.style.display = 'block';
			$ma.style.display = 'none';
		}
		$hold.onclick = function() {
			$ma.style.display = 'block';
			$denglu.style.display = 'none';
		}
		$show1.onclick = function() {
			$denglu.style.display = 'block';
			$ma.style.display = 'none';
		}
		$hold1.onclick = function() {
			$ma.style.display = 'block';
			$denglu.style.display = 'none';
		}
		$username.onblur = function() {
			if(this.value == '') {
				$zzyz.style.display = 'block';
				$p.innerHTML = '内容不能为空';
				$p.className = 'bg-danger';
				return;
			}
			var reg = /^1[35789]\d{9}$/
			if(reg.test(this.value)) {
				$zzyz.style.display = 'none';
			} else {
				$zzyz.style.display = 'block';
				$p.innerHTML = '请输入正确的手机号码';
				$p.className = 'bg-danger';
				return;
			}
		}
		$password.onblur = function() {
			if(this.value == '') {
				$zzyz.style.display = 'block';
				$p.innerHTML = '密码不能为空';
				$p.className = 'bg-danger1';
				return;
			}
			var reg = /^\w{6,15}$/
			if(reg.test(this.value)) {
				$zzyz.style.display = 'none';
			} else {
				$zzyz.style.display = 'block';
				$p.innerHTML = '请输入6-15位的密码, 且为数字字母下划线';
				$p.className = 'bg-danger1';
				return;
			}
		}
		$btn.onclick = function() {
			if($p.className = 'bg-danger') {
				$username.focus();
                return;
			}

			if($p.className = 'bg-danger1') {
				$password.focus();
				return;
			}

			
		}