var cursos = [
    'Programação para leigos',
    'Algoritmos e lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Bando de Dados',
    'Programação Web com Django Framework',
    'Programação em Java Script'
]

//console.log(cursos);
//console.log(cursos.length);
//                valor  index
function imprimir(curso, indice /*,array*/){
 //   console.log(indice + ' - '+ curso);
}

//para cada
//cursos.forEach(imprimir);

//utilização de uma funcao anonima (lambda ou callback) e template string

cursos.forEach(function(curso, indice){
    //console.log(`${indice} - ${curso}.`);
});

//iterando em um for simples.

for(var i = 0; i < cursos.length; i++){
    console.log(`${i} - ${cursos[i]}.`)
}