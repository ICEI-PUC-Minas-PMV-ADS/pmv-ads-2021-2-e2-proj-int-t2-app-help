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
$chassi=$_POST['chassi'];
$modelo_carro=$_POST['modelo_carro'];


$sql = "INSERT INTO tbusuario (nome,data_nascimento,cpf,email,senha,chassi)
VALUES ('" .  $nome . "','".$data_nascimento . "','" .  $cpf . "','" . $email . "','". $senha. "','" . $chassi .  "')"; 
$sql = $conn->prepare($sql);

$sql->execute();
$result = $sql;

header("location:index.php");

?>