/*
arrays contendo 5 elementos - > n = 5

indices - > posição do elemento no array
[0] [1] [2] [3] [4];

valores em um array
indices   0        1      2    3    4
valores [12] ['Geek'] [true] [48] [52]

Detalhes sobre arrays
- Possuem tamanho infinito (limite da m. RAM do equipamento.)
- Podemos colocar qualquer tipo de dado
*/

//Forma 01
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
//console.log(alunos);

//Forma 02
var notas = [1, 3, 5, 7, 9];
//console.log(notas);

//Criando um array vazio
var dados = [];
//console.log(dados);

//Fazendo acesso ao valor de um índice
//console.log(notas[2]);

//alterando o valor a partir do índice
notas[2] = 12;
//console.log(notas);

//Atenção ao acessar um valor com índice inexistente
notas[9] = 10; // Não existe
//console.log(notas);

if(notas[5] == undefined){
    notas[5] = 54;
}

//console.log(notas[5]);  // undefined
//console.log(notas[6]);  // undefined
//console.log(notas[7]);  // undefined
//console.log(notas[8]);  // undefined
//console.log(notas[9]);  // 10

//console.log(notas[5] == undefined); //true

//Inserindo elementos no final do array
var nomes = ['Paula', 'Maria', 'Julia'];
//console.log(nomes);

nomes.push('Vanessa');
//console.log(nomes);

//console.log(nomes.length);
var tam = nomes.length;
//console.log(tam);

// Ordenar os dados de um array
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'Ana', 'Carla'];
//console.log(alunos);

alunos.sort(); // ordenando arrays de strings
//console.log(alunos);

var precos = [123.55, 42.27, 546.99, 23.12];
//console.log(precos);

//precos.sort(); // ordenação de floats. a funcao sort classifica o primeiro caractare como string
//console.log(precos);

idades = [5, 1, 8, 12, 44, 78];
//console.log(idades);
//console.log(idades.sort()); // ordenação de ints. a funcao sort classifica o primeiro caractare como string

//aplicando funcoes para ordenar numeros.

precos.sort(function(a, b) {return a - b;}); //lambda para resolver
//console.log(precos);

idades.sort(function(a, b){return a - b;});
//console.log(idades);

//Deletar dados de um array

//forma 1 (remove somente o dado, deixa o índice com 'undefined'.)
delete idades[3];
//console.log(idades);

idades[3] = 12;
//console.log(idades);

//forma 2, remove o indice e o dado
//idades.splice(3, 1); // a partir do indice 3, delete 1 elemento
//console.log(idades);

//Usando o splice par adicionar elementos.
//idades.splice(3, 0, 56, 89); // apartir do indice 3, nao delete nada, adiciona o  56 e o 89;
//console.log(idades);

//idades.splice(3, 1, 23); // apartir do indice 3, delete ele e adicione o 23
//console.log(idades);

// Iterar em um array

for(var i = 0; i < idades.length; i++){
    //console.log(idades[i]);
}
// Removendo o ultimo elemento de um array
//idades.pop(); // remove o ultimo elemento completo do array e o retorna.(igual no Python)
//console.log(idades);

//var ret = idades.pop();
//console.log(ret);
//console.log(idades);

// Removendo o primeiro elemento de um array
//idades.shift(); // remove e retorna o primento elemento do array
//console.log(idades)

// Inserindo elementos no ínicio de um array.

//idades.unshift(99);
//console.log(idades);

// dividir array

//var novo = idades.slice(3); //divide o array em outro array apartir do indice 3
//console.log(novo);

//var novo = idades.slice(1, 3); // apartir do indice 1, pegue até o indice 1 ate o 3 (sem incluir 0 3) e crie outro array
//console.log(novo);

// Juntando 2 arrays

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];
var rest = pares.concat(impares); // contatena os 2 arrays
//console.log(rest);

//console.log(rest.sort(function(a, b) {return a- b;}));

// array 4 X 4

var tabuleiro = [
//col 0   1   2   3  
    [ 1,  2,  3,  4], // linha 0
    [ 5,  6,  7,  8], // linha 1
    [ 9, 10, 11, 12], // linhe 2
    [13, 14, 15, 16]  // linhe 3
]

console.log(tabuleiro[2][2]);  // 11
