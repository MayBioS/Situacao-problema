//data
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

//idade
var anoAtual, anoNasc, idade, login, senha;

var entrada = require('readline-sync');

anoAtual = 2022;
anoNasc = parseFloat(entrada.question('Insira o ano de nascimento.: '));
idade = anoAtual-anoNasc;

if (idade >= 18){
    console.log('Cadastro permitido!!!')
    login = parseFloat(entrada.question('Insira email de login.: '));
senha = parseFloat(entrada.question('Insira sua senha.: '));
}
else{
    console.log('Cadastro bloqueado!!!')
}

//lista
let listaParti = ["Helena", "Chico", "Mário", "Ricardo", "Pereira", 'Lúcia', 'Maria', 'Pedro', "Santos"];
let qtdParti = listaParti.length;
var entrada = require('readline-sync');
var novo = entrada.question('Nome do Participante.: ');

for (let indice = 0; indice < qtdParti; indice++) {
	const partiCorrente = listaParti[indice];
	console.log(partiCorrente);
}
console.log(qtdParti);

if (qtdParti < 10) {
	listaParti.push(novo);
	console.log(listaParti);
} else {
	console.log("Não é possível inserir novo usuario");
}

//Estatus
var estatus;
var entrada = require('readline-sync');

estatus = entrada.question('Participante ou Palestrante?.: ');

console.log(estatus)