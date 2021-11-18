/*
    - Conjuntos não aceitam repetição de valores;
    - Conjuntos nao são indexados;
*/

// Declarando um conjunto
// let cursos = new Set();

// // Adicionando valores
// cursos.add('Programação para Leigos'); // Adiciona e retorna todo o conjunto
// cursos.add('Algoritmos e lógica de Programação');

// // Adicionar valores concatenados
// cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

// cursos.add('Banco de Dados');
// cursos.add('Banco de Dados'); // não há repetição de valores

// cursos.add('Programação Web com Django Framework');

// // console.log(cursos);

// // Acessando o tamanho do conjunto
// console.log(cursos.size);

// // Se elemento está contido no conjunto
// console.log(cursos.has('Banco de Dados')); // Case sensitive

// // Deletar elemento de um conjunto

// cursos.delete('Programação para Leigos'); // Deleta e retorna true ou false
// console.log(cursos);


let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];
let frutas_unicas = new Set(frutas);
console.log(frutas_unicas);
