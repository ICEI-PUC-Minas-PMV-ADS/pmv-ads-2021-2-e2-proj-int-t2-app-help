<?php ini_set('log_errors', 1);
ini_set('display_errors', 1);
error_reporting(E_ALL);
include('./config.php');
?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Checkout example for Bootstrap</title>

  <!-- <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico"> -->

  <!-- css -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/checkout/">
  <link rel="stylesheet" href="scss/theme.scss">

  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <!-- <link href="form-validation.css" rel="stylesheet"> -->

  <style>
    body {

      --primary: #D80E70;
      --secondary: #dddddd;
      --success: #4EF037;
      --danger: #FA4659;
      --info: #00BBF0;
      --warning: #f4f133;
      --light: #eeeeee;
      --dark: #353535;
    }
  </style>
</head>
<?php
if (isset($_GET['id'])) {
  $id = $_GET['id'];
  $sth = $conn->prepare('SELECT * FROM tbprestador where id = ?');
  $sth->bindParam(1, $id, PDO::PARAM_INT);
  $sth->execute();
  $result = $sth->fetchAll(PDO::FETCH_ASSOC);
  $prestador = $result[0];
?>

<body class="bg-light">

  <form class="needs-validation" novalidate>
    <div class="col-md-8 order-md-1 mx-auto">
      <h4 class="mb-3">Dados De Prestador</h4>


      <!-- nome sobrenome -->
      <form action="action_dados_P.php" method="post">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <label for="firstName">Nome</label>
            <input type="text" class="form-control" name="nome" id="firstName" placeholder="" value="<?php echo $prestador['nome'] ?>" required>
          </div>


          <!-- data cpf -->

          <div class="col-md-8">
            <label for="diaa">Informe a data de nascimento :</label>
            <input type="date" class="form-control" id="diaa" name="data_nascimento" value="<?php echo $prestador['data_nascimento'] ?>">
          </div>
          <div class="col-md-8">
            <label for="lastName">CNPJ</label>
            <input type="text" class="form-control" placeholder="XXXXXXXXXXX" value="<?php echo $prestador['cnpj'] ?>" require>
          </div>

          <!-- nome do comercio -->
          <div class="col-md-8 ">
            <label class="form-label"></label>
            <input type="text" class="form-control mb-lg-3 " name="nome_do_comercio" placeholder="NOME DO COMERCIO" value="<?php echo $prestador['nome_do_comercio'] ?>" require>
          </div>

          <!-- serviço -->
          <div class="col-md-8 ">
            <label for="lastName">Serviço</label>
            <input type="text" class="form-control" value="<?php echo $prestador['servico_do_comercio'] ?>" require>
          </div>


          <!-- email -->
          <div class="col-md-8 ">
            <label for="email">Email <span class="text-muted"></span></label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" value="<?php echo $prestador['email'] ?>" require>
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <!-- senha comfirma-senha -->


          <div class="col-md-8 ">
            <label for="address">Senha</label>
            <input type="password" class="form-control" id="address" value="<?php echo $prestador['senha'] ?>" required>
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="col-md-8">
            <label for="address2">Confirme sua senha <span class="text-muted"></span></label>
            <input type="password" class="form-control" id="address2" value="<?php echo $prestador['senha'] ?>" require>
          </div>
        </div>
        </div>
      </div>
      <button type="submit" class="btn  btn-dark btn-lg active" role="button" style="border-radius: 10px; width: 180px; height: 50px; font-size:16px;">Alterar
        <lord-icon
            src="https://cdn.lordicon.com/zzcjjxew.json"
            trigger="loop"
            colors="primary:#000000,secondary:#eeca66"
            style="width:40px;height:40px">
        </lord-icon>
      </button>
    </div>
</form>

  <!-- Bootstrap core JavaScript
    ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script>
    window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')
  </script>
  <script src="../../assets/js/vendor/popper.min.js"></script>
  <script src="../../dist/js/bootstrap.min.js"></script>
  <script src="../../assets/js/vendor/holder.min.js"></script>
  <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
  <script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
      'use strict';

      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  </script>
</body>
<?php }
?>
</html>
