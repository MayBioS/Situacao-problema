var diaAtual, diaEvento, dia, mesAtual, mesEvento, mes;
var entrada = require('readline-sync');

diaAtual = parseInt(entrada.question('Insira o dia Atual.: '));
diaEvento = 25;
dia = diaEvento-diaAtual
mesAtual = parseInt(entrada.question('Insira o mes Atual.: '));
mesEvento = 08;
mes = mesEvento-mesAtual;


if (dia != 0) console.log('O cadastro estara aberto por mais', dia, 'dias e', mes, 'meses');
else if (mes != 0) console.log('O cadastro estara aberto por mais', dia, 'dias e', mes, 'meses');
else console.log ("O prazo de cadastro está encerrado!!!")