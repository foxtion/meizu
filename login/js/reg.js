var $from = document.querySelector('.form-box');
		var $username = $from['username'];
		var $password = $from['password'];
		var $p = document.querySelector('.l');
		var $zzyz = document.querySelector('.zzyz');
		var $cha = document.querySelector('.cha');
		var $btn = document.querySelector('.btn');
		$cha.onclick = function(){
			$zzyz.style.display = 'none';
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
				$p.innerHTML = '请输入合法的手机号码';
				$p.className = 'bg-danger';
				return;
			}
		}
		$password.onblur = function() {
			if(this.value == '') {
				$zzyz.style.display = 'block';
				$p.innerHTML = '密码不能为空';
				$p.className = 'bg-danger';
				return;
			}
			var reg = /^\w{6,15}$/
			if(reg.test(this.value)) {
				$zzyz.style.display = 'none';
			} else {
				$zzyz.style.display = 'block';
				$p.innerHTML = '请输入6-15位的密码, 且为数字字母下划线';
				$p.className = 'bg-danger';
				return;
			}
		}
		$btn.onclick = function() {
			if($p.className = 'bg-danger') {
				$username.focus();
                return;
			}

			if($p.className = 'bg-danger') {
				$password.focus();
				return;
			}

			
		}
		