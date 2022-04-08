<?php

$umnum = $_GET["1num"];
$doisnum = $_GET["2num"];
$operador = $_GET["op"];

switch ($operador) {
    case '+':
        echo $umnum + $doisnum;
        break;
    
    case '-':
        echo $umnum - $doisnum;
        break;

    case '/':
        echo $umnum / $doisnum;
        break;
    case '*':
        echo $umnum * $doisnum;
        break;

    default:
        echo 'Operador inválido';
        break;
}