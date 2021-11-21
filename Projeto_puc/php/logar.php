<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/logar.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Página Usuário</title>
</head>
<body >
    <main>
        <div class="container">
        <main id="parte-img">
            <div class="img">
            <img src="../img/logar.svg" alt="" width="400">
            </div>
    </main>
        <main id="parte-texto">
            <div class="text">
            <p>Bem vindo</p>
            <H1>Faça login na sua conta</H1>
            <form class="form">
                <p>E-mail</p>
                <input type="Email">
                <p>Senha</p>
                <input type="password" >
            </form>
            <div id="relembre">
            <input class="radio" type="radio" name="theradio" id="radio1">
            <label for="radio1">Lembrar de mim</label>
            <a href="#">Esqueceu sua senha?</a>
            </div>
            <button class="btn-1">Entrar</button>
            <button class="btn-2"><img src="../img/iconfinder_Google_1298745 1.png" >Ou faça login com o Google</button>  
            </div>
            <div class="cadastro">
                <p>Não tem uma conta ? </p>
                <a href="../php/formulario_T.php"> Cadastre-se </a>
            </div> 
    </main>
    <div id="background"></div>
    </div>
</main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>