<?php

  //conexão
  include ('conexao.php');

  //sql
  $sql = "SELECT * FROM cursos";

  //Executar
  $executar = mysqli_query($conexao, $sql);

  //Vetor
  $cursos = [];

  //Indice
  $indice = 0;

  //laço
  while($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice]['idCurso'] = $linha['idCurso'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice++;
  }


  json_encode(['cursos' => $cursos]);

?>