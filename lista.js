let listaParti = ["Helena", "Chico", "Mário", "Ricardo", "Pereira", 'Lúcia', 'Maria', 'Januario', 'Pedro', "Santos"];
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