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
    $url = "../login1.html";
    $url1 = "javascript:history.back(-1)";
    if(strlen($password)<6){
        //exit('错误：密码长度不符合规定。<a href="javascript:history.back(-1);">返回</a>');
        echo "<script>alert('错误：密码长度不符合规定')</script>";
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
        
        //exit('该用户已存在。<a href="javascript:history.back(-1);">返回</a>');
        echo "<script>alert('该用户已存在.请登录...')</script>";
        echo "<script language='javascript' type='text/javascript'>";
	    echo "window.location.href='$url'";
	    echo "</script>";
    }else{
        $insert_sql = "INSERT INTO `user` (`username`, `password`) VALUES ('$username', '$password')";
        
        $result = $conn ->query($insert_sql);
        if($result){
             //exit('注册成功。<a href="../login1.html">点击登录</a>');
            echo "<script>alert('注册成功，请登录，点击确定跳转登录页面')</script>";
            echo "<script language='javascript' type='text/javascript'>";
			echo "window.location.href='$url'";
			echo "</script>";
        }else{
            //exit('注册失败。<a href="javascript:history.back(-1);">返回</a>');
            echo "<script>alert('注册失败，请重新注册，点击确定返回上一页')</script>";
            echo "<script language='javascript' type='text/javascript'>";
            echo "注册失败，请重新注册...";
			echo "window.location.href='$url'";
			echo "</script>";
        }
    };
?>