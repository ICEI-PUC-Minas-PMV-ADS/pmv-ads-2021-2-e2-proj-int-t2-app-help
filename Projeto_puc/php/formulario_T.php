<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="utf-8">
  <title><img src="../img/Component 1.png">ágina de cadastro</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/todos.css">
</head>
<body>
  <div class="text">
    <h1>CADASTRO</h1>
  </div>
 
<form action="todos.php" class="menu" method="post">
    <div class="form-group">
      <input type="text" class="form-control form-control-lg" id="nome" name='nome' placeholder="NOME COMPLETO" required>
    </div>
    <div class="form-row">
      <div class="form-group col-lg-5">
        <input type="date" class="form-control form-control-lg"  id="nascimento" name="data_nascimento" placeholder="DATA DE NASCIMENTO" required>
      </div>
      <div class="form-group col-lg-5 ">
        <input type="text" class="form-control form-control-lg" id="cpf" name="cpf" placeholder="CPF" required>
      </div>
    </div>
    <div class=form-group>
      <div class="form-group">
        <input type="email" class="form-control form-control-lg" id="email" name="email" placeholder="EMAIL" required>
      </div>
      <input type="password" class="form-control form-control-lg" id="password" name=senha placeholder="SENHA" required>
    </div>
      <input type="password" class="form-control form-control-lg" id="password1" placeholder="CONFIRMAR SENHA" required>
    
    <div class="form-check form-check-inline" >
      <input class="form-check-input" type="radio" name="checkbox" id="inlineRadio1" value="usuario" >
      <label class="form-check-label" for="inlineRadio1">usuario</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="checkbox" id="inlineRadio2" value="prestador">
      <label class="form-check-label" for="inlineRadio2">prestador</label>
    </div>
    <div class="d-grid gap-2 col-4 mx-auto">
      <button type="submit" class="btn">CONTINUAR</button>
    </div>
</form>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>
