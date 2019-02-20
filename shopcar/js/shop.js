var shop = (function() {
    var $box = document.querySelector('.main');
    // var getData = null;
    return {
        init() {
            this.getJson();
            this.event();
        },
        event() {
            var _this = this;
            $box.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == 'BUTTON') {
                    // 获取自定义属性
                    var index = target.parentNode.getAttribute('index');
                    var obj = {
                        count: 1,
                        ..._this.data[index]
                    }
                    console.log(obj);
                    _this.setData(obj);
                }

            }
            $box.onchange = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'INPUT') {
                    var index = target.parentNode.getAttribute('index');
                    _this.data[index].count = Number(target.value);                  
                }
            }
        },
        getJson() {
           var _this = this;
           sendAjax('json/shop.json', {
               success(data) {
                    _this.insertData(JSON.parse(data)); 
                                   }
           }) 
        },
        insertData({code, data}) {
            // getData = data;
            this.data = data;
            if(code == 200) {
                // var str = '';
                var arr = [];
                data.forEach((item, index) => {
//                  var $div = `
//                  <div id="${item.id}" index=${index}>
//                      商品名称:<span class="shop-name">${item.name}</span><br />
//                      数量: <input class="shop-count" type="number"  value="1" /><br />
//                      单价: <span class="shop-price">${item.price}</span><br />
//                      <button class="btn shop-btn-car" >加入购物车</button>
//                  </div>`
                    var $div = `
                        <table class="cart-merchant-body" id="${item.id}" index=${index}>
								<tr class="cart-more-buy">
									<td class="cart-product-buy" colspan="5">
										<div class="more-buy-tag">
											<span>加价购</span>
										</div>
										<span class="more-buy-tips">另外再加15元起，即可换购超值商品</span>
										<span class="more-buy-skip">立即加购 ></span>
									</td>
								</tr>
								<tr class="cart-product hasTheBinder">
									<td class="cart-col-select">
										<div class="mz-checkbox"></div>
										<a href="#" class="cart-product-link">
											<img src="../app/images/icon09.png" class="cart-product-img" />
										</a>
										<a href="#" class="cart-product-link cart-product-info">
											<p class="cart-product-item-name">${item.name}</p>
											<p class="cart-product-package-name">${item.taocan}</p>
											<p class="cart-product-desc">${item.jixing}</p>
										</a>
									</td>
									<td class="cart-col-price">
										<p>
											<span class="cart-product-price">
											${item.price*item.count}
										</span>
										</p>
									</td>
									<td class="cart-col-number" style="text-align: center; margin-left: 20px;">
										<div class="cart-product-number-adder">
											<div class="mz-adder">
												<button class="mz-adder-subtract"></button>
												<div class="mz-adder-num">
													<input type="text" class="mz-adder-input" value="1" />
												</div>
												<button class="mz-adder-add disabled"></button>
											</div>
										</div>
									</td>
									<td class="cart-col-total">
										<span class="cart-product-price total main-goods">
										${item.price*item.count}.00
									</span>
									</td>
									<td class="cart-col-ctrl">
										<div class="cart-product-remove "></div>
									</td>
								</tr>
							</table>
			            `
                    
                    arr.push($div);
                })
                // 数组拼接效率比字符串拼接效率高
                $box.innerHTML = arr.join('');
                console.log(data);
            } else {
                alert('你没有获取数据的权限')
            }
        },
        // 把数据存储到本地
        setData(data) {
            //[{}]
            // debugger
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
            // var flag = true;
            // 如果商品不存在，添加一条新数据
            // 如果商品已经存在,数量累加即可
            for(var i = 0; i < shopList.length; i++) {
                var item = shopList[i];
                if(item.id == data.id) {
                    // flag = false
                    // 商品已经存在
                    item.count += data.count;
                    break;
                } 
            }
            // if(flag) {

            // }
            if(i == shopList.length) {
                // 商品不存在
                shopList.push(data);
            }
            localStorage.shopList = JSON.stringify(shopList);
            alert('加入购物车成功')
        }
    }
}())
shop.init();