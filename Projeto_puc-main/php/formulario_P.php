<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/prestador.css">
    <title>Página Usuário</title>
</head>
<body >
    <div class="texto">
      <h1>PRESTADOR</h1>
    </div>
      <form action="prestador.php" name="menu" class="menu"  method="post">
        <div class="row mb-lg-3">
          <label  class="form-label" ></label>
          <input type="text" class="form-control mb-lg-3 " name="nome_do_comercio" placeholder="NOME DO COMERCIO" require>
        </div>  
        <div class="row">
        <select class="custom-select mb-4 " id="inputGroupSelect03" name="servico_do_comercio" style="background-color: #C4C4C4;" require>
          <option selected>Serviço...</option>
          <option value="1">Combustivel</option>
          <option value="2">Falhas mecanicas</option>
          <option value="3">Reboques</option>
        </select>
            <label class="form-label"></label>
            <input type="text" class="form-control mb-lg-3 " name="cnpj" placeholder="CNPJ" require>
          </div> 
          <label class="form-label"></label>
          <input type="text" class="form-control mb-lg-3 " name="valor_servico" placeholder="VALOR DE SERVIÇO" require>
          </div> 
          <button type="submit" class="btn btn">ENTRAR</button>
      </form>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>
