var shopCar = (function () {
    var $ul = document.querySelector('ul');
    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            var _this = this;
            $ul.oninput = function (e) {
                e = e || window.event;
                var target =  e.target || e.srcElement;
                var index = target.parentNode.index;
                if(target.nodeName === 'INPUT') {
                    // 修改本地的数据
                    // 获取当前数据
                    var data = _this.data[index];
                    // 修改对应数据的数量
                    data.count = Number(target.value);
                    // 更新本地数据
                    localStorage.shopList = JSON.stringify(_this.data);
                    // _this.setItem(data);
                    // 修改小计
                    _this.insertData(_this.data);

                } 
            }
            $ul.onclick = function(e) {
                e = e || window.event;
                var target =  e.target || e.srcElement;
                var pNode = target.parentNode;
                if(target.nodeName == 'BUTTON') {
                    _this.data.splice(pNode.index, 1);
                    console.log(_this.data);
                    pNode.remove();
                    localStorage.shopList = JSON.stringify(_this.data);
                }
            }
        },
        getData() {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            this.data = shopList;
            console.log(shopList);
            this.insertData(shopList)

        },
        insertData(data) {
            $ul.innerHTML = '';
            data.forEach((item, index) => {
                var $li = document.createElement('li');
                $li.index = index;
                $li.innerHTML = `
                    商品名称:<span class='title'>${data[index].title}</span></br>
                    商品价格<span class='price'>${data[index].price}</span></br>
                    购买数量<input class="count" value=${data[index].count} placeholder="请输入数量" /></br>
                    小计<span>${data[index].price * data[index].count}</span></br>
                    <button>删除</button>
                `
                $ul.appendChild($li);
            })
        }
    }

}())