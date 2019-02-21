
                        // localStorage.removeItem('data');  //清除本地存储
                        var jsonData = JSON.parse(localStorage.getItem('data'));
                        console.log(jsonData);
                        if(!jsonData){
                            jsonData = [];
                        }
                        else{
                            // 初始化
                            show();
                        }
                        function btn(){
                            if(!$(".yanse").text() || !$(".selected").text() || !$(".selected").text()){
                                alert("数据不能有空档");
                            }
                            else{
                                jsonData.push({
                                    name:$(".yanse").text(),
                                    age:$(".selected").text(),
                                    sex:$(".selected").text()
                                });
                                console.log(jsonData);
                                $(".yanse").text("");
                                $(".selected").text("");
                                $(".selected").text("");
                                localStorage.setItem('data',JSON.stringify(jsonData));
                                $(".tt").empty();
                                show();
                            }
                        }
                        // DOM数据到表格上
                        function show(){
                            for(key in jsonData){
                                $(".tt").append(`
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
                                                    <img src="images/icon09.png" class="cart-product-img" />
                                                </a>
                                                <a href="#" class="cart-product-link cart-product-info">
                                                    <p class="cart-product-item-name">${jsonData[key].name}</p>
                                                    <p class="cart-product-package-name">${jsonData[key].age}</p>
                                                    <p class="cart-product-desc">${jsonData[key].sex}</p>
                                                </a>
                                            </td>
                                            <td class="cart-col-price">
                                                <p>
                                                    <span class="cart-product-price">
                                                    ${jsonData[key].sex}
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
                                                ${jsonData[key].sex}
                                            </span>
                                            </td>
                                            <td class="cart-col-ctrl">
                                                <div class="cart-product-remove "></div>
                                            </td>
                                        </tr>
                                `);
                            }
                        }	