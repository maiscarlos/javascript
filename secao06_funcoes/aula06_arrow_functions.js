// Forma 1
function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4, 6));

//Forma 2

const somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(4, 6));

const somar3 = somar2;

console.log(somar3(4, 6));

// Arrow Function

const somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(4, 6));

/*
Atenção:

Caso a sua função tenha apenas 1 parâmetro de entrada e executa uma linha;
você pode simplificar ainda mais usando Arrow Function
*/

const dobrar = valor => valor * 2;

console.log(dobrar(5));

function mensagem1(){
    console.log('Evolua seu lado Geek!');
}

const msg = () => console.log('Evolua seu lado Geek!');

mensagem1();
msg();