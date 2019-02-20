var shop_car = (function(){
    var $box = document.querySelector('.main');
    return {
        init() {
            this.getJson();
            this.event()
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
            shopList = JSON.parse(shopList);
            this.insertData(shopList);
        },
        // 数据渲染
        insertData(data) {
            this.data = data;
            // var $str = '';
            var $arr = [];
            for(var i = 0; i < data.length; i++) {
                var item = data[i];
                $arr.push(` <div index=${i}>
                    商品名称:<span class="shop-name">${item.name}</span><br />
                    数量: <input class="shop-count" type="number" value="${item.count}" /><br />
                    价格: <span class="shop-price">${item.price}</span><br />
                    商品总价: <span class="shop-total">${item.price * item.count}</span>
                    商品提示: <span class="shop-tip">${item.ps}</span>
                    <button class="btn shop-btn-del">删除</button>
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