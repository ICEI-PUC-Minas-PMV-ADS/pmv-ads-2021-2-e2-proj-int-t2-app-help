<?php
session_start();

ini_set('log_errors', 1);
ini_set('display_errors', 1);
error_reporting(E_ALL);
include('config.php');


$nome=$_POST['nome'];
$data_nascimento=$_POST['data_nascimento'];
$cpf=$_POST['cpf'];
$email= $_POST['email'];
$senha=$_POST['senha'];
    
if ($_POST['checkbox']=='usuario') {
    $_SESSION['nome'] = $nome;
    $_SESSION['data_nascimento'] = $data_nascimento;
    $_SESSION['cpf'] = $cpf;
    $_SESSION['email'] = $email;
    $_SESSION['senha'] = $senha;
    header("location:formulario_U.php");
} else if ($_POST['checkbox']=='prestador'){
    $_SESSION['nome'] = $nome;
    $_SESSION['data_nascimento'] = $data_nascimento;
    $_SESSION['cpf'] = $cpf;
    $_SESSION['email'] = $email;
    $_SESSION['senha'] = $senha;
    header("location:formulario_P.php");
}else {
    echo "informe como deseja entrar...como prestador ou usuario ?";
}




?>