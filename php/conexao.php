<?php

  //Variaveis
  $url = 'localhost';
  $usuario = 'root';
  $password = '';
  $base = 'api';

  //Conexão
  $conexao = mysqli_connect($url, $usuario, $password, $base);

  //Arrumar caracteres especiais
  mysqli_set_charset($conexao, 'utf8');
?>