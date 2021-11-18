// Var
//var numero = 42;
//console.log(numero);

//numero = numero + 18;
//.log(numero);

// Let
//let outro_numero = 42;
//.log(outro_numero);

//outro_numero = outro_numero + 18;
//console.log(outro_numero);

//let nome = 'Geek';
//console.log(nome);

//nome = 'University';
//console.log(nome);

//for(let i = 0; i < 5; i++){
//    console.log(i ** 2);
//}

const TAXA = 1.44;

let res = 45 * TAXA;
//console.log(TAXA);

const curso = {nome: 'Programação em JavaScript'};
//console.log(curso.nome);

// podemos apenas realizar mutação em dados contidos na constante

curso.nome = 'Programação em Python'; // Mutaçao, mudando valor, não a constante.
console.log(curso);

/*
Dicas de como declarar variáveis em JavaScript:
    - A variável sera alterada (vai variar?) se sim use let
    - A variável será constante? (não vai variar?) se sim use const.
*/