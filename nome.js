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
