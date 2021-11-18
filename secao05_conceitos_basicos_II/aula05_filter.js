// Diferenç entre map e filter é que filter gera uma lista de tamanho menor ou igual,
// já o maps gera sempre igual.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(numeros);

function filtrar_pares(n){
    return n % 2 === 0;
}

function filtrar_impares(n){
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;
}

var ret = numeros.filter(function(n){return n % 2 === 0;}); //ou lambda
//console.log(ret);

ret = numeros.filter(filtrar_impares);
//console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
//console.log(ret);

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Pedro', nota: 7.3}
]

function notas_maiores_que_8(aluno){
    return aluno.nota > 8;
}

var filtrados = alunos.filter(notas_maiores_que_8);
console.log(filtrados);
