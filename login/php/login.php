<?php
     $conn = new mysqli('localhost','root','','meizu',3306);
      header("Content-Type:text/html;charset=utf-8");  
        $conn->query("SET CHARACTER SET 'utf8'");//读库   
        $conn->query("SET NAMES 'utf8'");//写库  
     if(!isset($_POST['submit'])){
         exit('非法访问！');
     };
     $username = $_POST['username'];
     $password = $_POST['password'];
     $sql = 'select * from user';
    // var_dump($sql);
     $row = $conn -> query($sql);
     //var_dump($row);
     $check_query = "select id from user where username='$username' and password='$password'";
     //var_dump($check_query);
     $result = $conn -> query($check_query);
     //var_dump($result);
     $url = "../../index/success.html";
     $url1 = "javascript:history.back(-1)";
     if($result->num_rows >0){
         //exit('登录成功。<a href="../../index/success.html">点击登录</a>');
        // echo "<script>setTimeout(\"href='../../index/success.html/'\",200);</script>";
        echo "<script language='javascript' type='text/javascript'>";
		echo "window.location.href='$url'";
		echo "</script>";

     }else{
          //exit('登录失败。<a href="javascript:history.back(-1);">返回</a>');  
          //echo "<script>setTimeout(\"href='javascript:history.back(-1)/'\",200);</script>";
          echo "<script language='javascript' type='text/javascript'>";
		echo "window.location.href='$url1'";
		echo "</script>";
     };
     
     
?>