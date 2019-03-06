var shop_car = (function(){
    var $box = document.querySelector('.main');
    return {
        init() {
            this.event();
            this.insertData(localStorage);
        },
        event() {
            var _this = this;
            // 添加单击事件
            $box.addEventListener('click', function(e){
                e  = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'BUTTON') {
                    // 获取对应数据的索引
                    var index = target.parentNode.getAttribute('index')
                    _this.data.splice(index, 1);
                    _this.setData();
                    // 通过数据重新渲染dom
                    _this.insertData(_this.data);
                }
            }, false)
            $box.onchange = function(e) {
                e  = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'INPUT') {
                    var index = target.parentNode.getAttribute('index')
                    // 更新数量
                    _this.data[index].count = target.value;
                    _this.setData();
                    // 通过数据重新渲染dom
                    _this.insertData(_this.data);
                }
            }
        },
		// 获取数据
		getJson() {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.stringify(shopList);
            this.insertData(shopList);
        },
        // 数据渲染
        insertData(localStorage) {
            // var $str = '';
			var $arr = [];
			if(localStorage.length){
				var id = 1
			}else{
				var id = 0;
			}
            for(var i = 0; i < id; i++) {
                $arr.push(`<table class="cart-merchant-body" id="${localStorage.name}" index=${i}>
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
											<img src="images/01-small.png" class="cart-product-img" />
										</a>
										<a href="#" class="cart-product-link cart-product-info">
											<p class="cart-product-item-name">${localStorage.name}</p>
											<p class="cart-product-package-name">${localStorage.tc}</p>
											<p class="cart-product-desc">全网通  ${localStorage.col} ${localStorage.nc}</p>
										</a>
									</td>
									<td class="cart-col-price">
										<p>
											<span class="cart-product-price">
										${localStorage.price}
										</span>
										</p>
									</td>
									<td class="cart-col-number" style="text-align: center; margin-left: 20px;">
										<div class="cart-product-number-adder">
											<div class="mz-adder">
											<input class="mz-adder-subtract button min" type="button" value="-" />
											<div class="mz-adder-num">
												<input type="text" class="mz-adder-input" value="${localStorage.n}" />
											</div>
											<input class="mz-adder-add disabled button add" type="button" value="+" />
											
											</div>
										</div>
									</td>
									<td class="cart-col-total">
										<span class="cart-product-price total main-goods">
										${localStorage.price * localStorage.n}
									</span>
									</td>
									<td class="cart-col-ctrl">
										<div class="cart-product-remove "></div>
									</td>
								</tr>
							</table>
							<div class="cart-footer fixed">
				<div class="mzcontainer">
					<div class="cart-footer-left">
						<div class="cart-select-all JSelectAll">
							<div class="mz-checkbox"></div>
							<span class="cart-select-title">全选</span>
						</div>
						<span class="cart-remove-selected">删除选中的商品</span>
						<span class="cart-footer-count">
							共
							<span class="cart-footer-num" id="totalCount">${localStorage.n}</span> 件商品，已选择
						<span class="cart-footer-num blue" id="totalSelectedCount">${localStorage.n}</span> 件
						</span>
					</div>
					<div class="cart-footer-right">
						<span class="class=" cart-footer-sum "">
							已优惠
							<span class="cart-footer-num red" id="totalDiscount">0.00</span> 元，合计(不含运费)：
						<span class="cart-footer-total" id="totalPrice">
								${localStorage.price * localStorage.n}
							</span>
						</span>
						<div class="mz-btn success to-order-btn" id="cartSubmit">去结算
						</div>
					</div>
				</div>
			</div>
		</div>`);
            }
            $box.innerHTML = $arr.join('');
		},
		setData() {
            localStorage.shopList = JSON.stringify(this.data);
        }
    }
}())
shop_car.init();