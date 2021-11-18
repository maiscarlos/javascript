function somar1(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){ //por padrao, o JS cria um array com argumentos.
        soma += arguments[i];
    }
    return soma;
    
}
// console.log(somar1());
// console.log(somar1(2));
// console.log(somar1(5, 3, 9));
// console.log(somar1(2, 4, 6, 8, 12));

function imprime_valores(){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

//imprime_valores();
//imprime_valores(4, 6, 8,);
//imprime_valores(3, 6, 8, 12, 44 ,56);

// Gambiarra 1

function somar_2(num1, num2, num3){
    num1 = num1 || 1; // num1 ou 1
    num2 = num2 || 2;
    num3 = num3 || 3;   
    
    return num1 + num2 + num3
}

function somar_3(num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;

    return num1 + num2 + num3;

}

// console.log(somar_2(3)); // 3 + 2 + 3 = 8 
// console.log(somar_2(0, 0, 0)); // 1 + 2 + 3 = 6 [nesse caso, zero para false]

// console.log(somar_3(3)); // 3 + 2 + 3 = 8 
// console.log(somar_3(0, 0, 0)); // 0

// Forma atual recomendada para definir valor padrão

function somar_4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

// console.log(somar_4(3)); // 3 + 2 + 3 = 8 
// console.log(somar_4(0, 0, 0)); // 0

// console.log(somar_4('a', 'b', 'c')); // 'abc'
// console.log(somar_4(true, false, 'c'));  // '1c' true = 1 false = 0
// console.log(somar_4(2, true, false)); // 3

function somar_5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return -1;
    }
}

console.log(somar_5('a', 'b', 'c')); // -1
console.log(somar_5(true, false, 'c'));  // -1
console.log(somar_5(2, true, false)); // -1
