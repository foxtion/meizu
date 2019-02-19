var menu3 = (function () {
    var $ulbox = $('.menu-box');
    var padding = 0;
    return {
        init() {
            this.getJson();
            this.events();
        },
        events() {
            var _this = this;
            $ulbox.on('click', 'li:has(ul)', function () {
                $(this).children("ul").slideToggle();
                $(this).children("div").children("i").toggleClass("qf-shop-plus").toggleClass("qf-shop-reduce")
            })
            $ulbox.on('click', 'li', function (e) {
                e.stopPropagation();
            })
        },
        getJson() {
            $.getJSON('json/menu.json', (data) => {
                this.insertData(data, $ulbox, padding)
            })
        },
        insertData(data, parentNode, padding) {
            var $ul = $('<ul></ul>');
            data.forEach((item) => {
                var $li = $("<li>")
                var $div = $(`<div style="padding-left: ${padding}px;">${item.title}</div>`)
                $li.append($div);
                $ul.append($li);
                if (item.child) {
                    var $i = $("<i class='qf qf-shop-jianhao'></i>");
                    $div.append($i);
                    this.insertData(item.child, $li,  padding + 20);
                }
            })

            parentNode.append($ul);

        }

    }

})()