<?php
ini_set('log_errors', 1);
ini_set('display_errors', 1);
error_reporting(E_ALL);
include('config.php');


$campo_busca=$_POST['busca'];
if (!empty($campo_busca)){
    strtolower($campo_busca);
    $pesquisa=("SELECT * FROM `tbprestador` WHERE lower (servico_do_comercio) LIKE '%$campo_busca%' ");
}else {
    header("location:Erro_404.php");
}

$pesquisa = $conn->prepare($pesquisa);
$pesquisa->execute(); 
$result = $pesquisa->fetchAll(PDO::FETCH_ASSOC); 

    ?>
<?php include("menu.php") ?>
<div class="container ">
<div class="row">

<?php foreach ($result as $key => $value) {
            ?>
    <div class="col-md-4">  
        <div class="card m-1  " >
            <img src="../img/Component 7.jpg" class="card-img-top" alt="...">
                <div class="card-body ">
                    <h5 class="card-title"><?php echo $value["nome_do_comercio"]?></h5>
                    <p class="card-text"><?php echo $value["servico_do_comercio"]?></p>
                    <a href="#" class="btn btn-primary">Aderir Serviço</a>
                </div>
        </div>
    </div>
<?php } 
?>
    </div>
</div>
<?php include("footer.php") ?>