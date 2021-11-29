<?php 
include('config.php');
session_start();
$email=$_POST['email'];
$password=$_POST['password'];


$sth = $conn->prepare('select * from site.tbusuario t  where t.email  = ? and t.senha = ? limit 1;');
$sth->bindParam(1, $email, PDO::PARAM_STR);
$sth->bindParam(2, $password, PDO::PARAM_STR);
$sth->execute(); 
$result = $sth->fetchAll(PDO::FETCH_ASSOC); 

if  (Empty ($result)){
  
    unset($_SESSION["USUARIO"]);    
    header("location: logar.php?erro=dadoserrado");

}else { 
    $_SESSION["USUARIO"]= $result[0] ;   
    header("location: index.php?erro=dadoserrado");
}



?>
