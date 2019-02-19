<?php
    $conn = new mysqli('localhost','root','','meizu',3306);
     header("Content-Type:text/html;charset=utf-8");  
 //针对数据库  
       $conn->query("SET CHARACTER SET 'utf8'");//读库   
       $conn->query("SET NAMES 'utf8'");//写库  
   
    if(!isset($_POST['submit'])){
        exit('非法访问！');
    };
    $username = $_POST['username'];
    $password = $_POST['password'];
    if(strlen($password)<6){
        exit('错误：密码长度不符合规定。<a href="javascript:history.back(-1);">返回</a>');
    };
    $sql = 'select * from user';
   // var_dump($sql);
    $row = $conn -> query($sql);
    //var_dump($row);
    $check_query = "select id from user where username='$username'";
    //var_dump($check_query);
    $result = $conn -> query($check_query);
    //var_dump($result);
    if($result->num_rows >0){
        
        exit('该用户已存在。<a href="javascript:history.back(-1);">返回</a>');
    }else{
        $insert_sql = "INSERT INTO `user` (`username`, `password`) VALUES ('$username', '$password')";
        
        $result = $conn ->query($insert_sql);
        if($result){
             exit('注册成功。<a href="../login1.html">点击登录</a>');
        }else{
            exit('注册失败。<a href="javascript:history.back(-1);">返回</a>');
        }
    };
?>