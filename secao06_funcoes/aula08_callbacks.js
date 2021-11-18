//Callback -> evendo para cada elemento de uma lista por exemplo.

const cursos = [
    'Programação para Leigos',
    'Algoritmos e lógica de Programação',
    'Programação em C',
    'Programação em JAVA',
    'Programação em Python',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
]

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}.`);
}

// cursos.forEach(apresentar); // Aqui está ocorrendo o callback.

// // Lambda
// cursos.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}.`);
// })

// // Arrow
// cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}.`));

const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = [];

// //for tradicional

// for(let i = 0; i < precos.length; i++){
//     if(precos[i] < 50){
//         menores.push(precos[i]);
//     }
// }
// console.log(menores);
// menores = [];

// for(let p in precos){
//     if(precos[p] < 50){
//         menores.push(precos[p]);
//     }
// }

// console.log(menores);

// Forma 1
// menores = precos.filter(function(preco){
//     return preco < 50;
// })

// console.log(menores);

// Forma 2
menores = precos.filter(preco => preco < 50);
console.log(menores);