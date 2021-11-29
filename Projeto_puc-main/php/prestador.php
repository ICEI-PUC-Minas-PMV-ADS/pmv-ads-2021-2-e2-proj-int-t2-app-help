<?php
session_start();
ini_set('log_errors', 1);
ini_set('display_errors', 1);
error_reporting(E_ALL);
include('config.php');



$nome =  $_SESSION['nome'];
$data_nascimento = $_SESSION['data_nascimento'];
$cpf=    $_SESSION['cpf'];
$email=    $_SESSION['email'];
$senha=    $_SESSION['senha'];

$nome_comercio=$_POST['nome_do_comercio'];
$servico_comercio=$_POST['servico_do_comercio'];
$cnpj=$_POST['cnpj'];
$servico=$_POST['valor_servico'];


$sql = "INSERT INTO tbprestador  (senha,nome,data_nascimento,cpf,email,nome_do_comercio,servico_do_comercio,cnpj,valor_servico) 
VALUES ('$senha','$nome','$data_nascimento','$cpf','$email','$nome_comercio','$servico_comercio','$cnpj','$servico')";

$sql = $conn->prepare($sql);
$sql->execute();
$result = $sql;




header("location:index.php");
?>
