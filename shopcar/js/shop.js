var t = $(".inp-sl");
var m = $(".allMoney").text();
var mm = $(".allMoney");
function updateMoney(){
    var tt = t.val();
    var total =  m*tt;   //输入框中的份额数与每份金额数相乘得到总金额
    mm.text(total);
    if(t.val()<=0){
        mm.text(m);
    }
}
$(function(){
$(".add").click(function() {
    t.val(parseInt(t.val()) + 1); //点击加号输入框数值加1
    updateMoney();  //显示总金额
});
$(".min").click(function(){
    t.val(parseInt(t.val())-1); //点击减号输入框数值减1
    if(t.val()<=0){
        t.val(parseInt(t.val())+1); //最小值为1
    }
    updateMoney();
});
$(".inp-sl").keyup(function(){
    var c=$(this);
    if(/[^\d]/.test(c.val())){//替换非数字字符
        var amount=c.val().replace(/[^\d]/g,'');
        $(this).val(amount);
    }
    updateMoney();  //手动输入数值金额随之改变
});
});
