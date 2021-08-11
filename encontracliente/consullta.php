<?php

if(isset($_POST['pesquisa'])){
  include 'simple_html_dom.php';

  // Create DOM from URL or file
  $html = file_get_html('https://guiafacil.com/busca/'.$_POST['pesquisa'].'/todas-cidades/todos-estados/');
  
  
  foreach ($html->find('div#resultado') as $link) {
    $count = 0;
  
    foreach ($link->find('a.black.analytics-conteudo.hidden-xs') as $whats) {
      $cliente[$count]['whats'] = $whats->href;
      $count++;
    }
    $count = 0;
  
    foreach ($link->find('a.a-img img') as $img) {
      $cliente[$count]['img'] = $img->src;
      $count++;
    }
    $count = 0;
  
    foreach ($link->find('a.a-img') as $ahref) {
      $cliente[$count]['href'] = $ahref->href;
      $count++;
    }
    $count = 0;
  
    foreach ($link->find('span.company-info') as $company) {
      $cliente[$count]['company'] = $company->plaintext;
      $count++;
    }
    $count = 0;
  
    foreach ($link->find('h2#nome') as $nome) {
      $cliente[$count]['nome'] = $nome->plaintext;
      $count++;
    }
  }
  
  for ($x = 0; $x < count($cliente); $x++) {
    $html = file_get_html($cliente[$x]['href']);
  
    foreach ($html->find("div.socialIcons a") as $dados) {
      // $social[$x][] = $dados->href;
      $cliente[$x]['social'][] = $dados->href;
    }
  
    // $return[] = array(
    //   'nome' => $cliente[$x]['nome'],
    //   'company' => $cliente[$x]['company'],
    //   'href' =>  $cliente[$x]['href'],
    //   'img' =>  $cliente[$x]['img'],
    //   'whats' =>  $cliente[$x]['whats'],
    //   'social' =>  $social
    // );
    }
}else{
  header('Location: /encontracliente/');
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Encontra Clientes</title>

  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <header>
    <nav>
      <ul>
        <li><a id="logoLink" href="http://localhost/encontracliente/"><img src="img/logo.png" alt="Logo"></a></li>
        <li>
          <input type="text" name="pesquisa" value="<?= $_POST['pesquisa']; ?>">
          <input type="button" id="pesquisa" value="Procurar">
        </li>
        <li>
          <input type="button" value="Nome Inserido" id="changename" class="name">

          <div class="edit">
            <input type="text" placeholder="Insira o seu Nome">
            <input type="button" value="Change name" class="btn-change" onclick="trocaname()">

          </div>
        </li>
      </ul>
    </nav>
  </header>

  <div class="changeResult">
    <div id="controls">
      <button id="export">Export</button>
      <button id="zapzap">Send</button>
      <button id="selectAll">Select All</button>
    </div>
    <main id="thumbs">
      <?php
      for ($x = 0; $x < count($cliente); $x++) {
        $list = "";

        $tel = explode("phone=", $cliente[$x]['whats'])[1];
        $tel = explode("&text=", $tel)[0];

        ?>
        <div class="card">
          <input type="checkbox" name="selecionado" class="check">
          <button class="btn-select" onclick="exe.btnSelect(<?= $x; ?>)">Selecionar</button>
          <div class="info-img">
            <figure class="tamanhoIMG">
            <img src="<?= $cliente[$x]['img']; ?>" alt="<?= $cliente[$x]['nome']; ?>">
            </figure>
            <article class="info-top">
              <h1><?= $cliente[$x]['nome']; ?></h1>
              <p><?= $cliente[$x]['company']; ?></p>
            </article>
            <div class="info-description">
              <ul class="links-cliente">
                <li><a href="<?= $cliente[$x]['href']; ?>">Guia Facil</a></li>
                <li><a href="<?= $tel; ?>">Whats</a></li>
              </ul>
        <?php
        
        if(isset($cliente[$x]['social'])){
          echo '<ol class="redes">';
          for ($w = 0; $w < count($cliente[$x]['social']); $w++) {
            if(isset(explode("www.", $cliente[$x]['social'][$w])[1])){
              $nameLink = explode("www.", $cliente[$x]['social'][$w])[1];
              $nameLink = explode(".com", $nameLink)[0];
            }else{
              $nameLink = explode("://", $cliente[$x]['social'][$w])[1];
              $nameLink = explode(".com", $nameLink)[0];
            }
            ?>
            <li><a href="<?= $cliente[$x]['social'][$w]; ?>"><?= $nameLink; ?></a></li>
            <?php
          }
          echo '</ol>';
        }
        ?>
            </div>
          </div>
        </div>

      <?php
      }
      ?>
      
    </main>
  </div>


  <script src="js/jquery.min.js"></script>
  <script src="js/script.js"></script>
</body>

</html>