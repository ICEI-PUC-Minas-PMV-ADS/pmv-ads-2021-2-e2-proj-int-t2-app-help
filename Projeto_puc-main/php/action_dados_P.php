<?php
ini_set('log_errors', 1); 
ini_set('display_errors', 1);
error_reporting(E_ALL);
include('config.php');

echo '<pre>';
print_r($_POST);
echo '</pre>';
exit;

    $nome = $_POST['nome'] ;
    $data_nascimento = $_POST['data_nascimento'] ;
    $email = $_POST['email'] ;
    $cnpj = $_POST['cnpj'] ;
    $nome_comercio = $_POST['nome_do_comercio'] ;
    $servico = $_POST['servico_do_comercio'] ;
    $senha = $_POST['senha'] ;
   
    $sth = $conn->prepare('UPDATE tbprestador SET nome = ? , ');
    $sth->bindParam(1, $nome, PDO::PARAM_INT);
    $sth->execute();
    $result = $sth->fetchAll(PDO::FETCH_ASSOC);
    $prestador = $result[0];
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" style="margin: 20% 40% ;" data-toggle="modal" data-target="#staticBackdrop">
    Confirmar alteraçao ?
    </button>

    <!-- Modal -->
    <div class="modal fade"  id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-5" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="staticBackdropLabel"> A alteraçao foi um sucesso</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Clique no botao e Confirme a alteraçao
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary"><a href="../php/index.php" style="color: #000;">Confirmar</a></button>
                </div>
            </div>
        </div>
    </div>
   
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>