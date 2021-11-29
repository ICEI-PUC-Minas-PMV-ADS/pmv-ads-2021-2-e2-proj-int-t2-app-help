<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/Pagina.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Document</title>
</head>
<body style="background-color: #F1F1F1;  overflow-x: hidden;">
  <nav class="navbar navbar-expand-lg ">
    <img src="../img/Component 1 (1).png" width="40" height="40" alt="" >
    <div class="menu collapse navbar-collapse" id="navbarNav" style="margin-right: 346px;">
        <ul class="navbar-nav">
            <li class="nav-item ">
                <a class="nav-link" href="../php/index.php">TODOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../php/servicos.php">SERVIÇOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../php/contato.php">CONTATOS</a>
            </li>
             <li class="nav-item">
                <a class="nav-link" href="../php/dados_Prestador.php">INFORMAÇÕES</a>
            </li>
        </ul>
    </div>
    <form action="busca.php" method="post" class="form-inline">
            <div class="input-group ">
                <input type="search" name="busca" placeholder="Buscar Serviços"  style="margin: 0px -70px; border-radius: 10px; border: none; width: 300px;">
                <button classe="btn  btn-dark btn-lg active" style="border-radius: 10px; width: 120px; height: 50px; font-size:16px;" type="submit">Buscar</button>
            </div>
        </form>
        <a href="../php/logar.php" class="btn  btn-dark btn-lg active" role="button" style="border-radius: 10px; width: 120px; height: 50px; font-size:16px;">Entrar
            <lord-icon
                src="https://cdn.lordicon.com/zzcjjxew.json"
                trigger="loop"
                colors="primary:#000000,secondary:#eeca66"
                style="width:40px;height:40px">
            </lord-icon>
        </a>
    </nav>
