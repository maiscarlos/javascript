// map - mapear e modificar dada dado do array.

var valores = [2, 4, 6, 8, 10];
console.log(valores);
var dobro = valores.map(function(valor){
    return valor * 2;
})
// console.log(dobro);
 // ou

function dobrar(valor){
    return valor * 2;
}

dobro = valores.map(dobrar);
// console.log(dobro);

// Encadeiando maps para realizar multiplas tranformações.

function soma_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}

var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultado);

/*
passo 0 ->                 [ 2,    4,   6, 8, 10 ]
passo 1 -> dobrar        = [ 4,    8,  12, 16, 20 ]
passo 2 -> soma_4        = [ 8,   12,  16, 20, 24 ]
Passo 3 -> dividir_por_5 = [ 1.6, 2.4, 3.2, 4, 4.8 ]
*/

