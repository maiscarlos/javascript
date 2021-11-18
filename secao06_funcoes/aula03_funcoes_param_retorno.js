function calcular_idade1(ano_nascimento){
    const data = new Date(); // gera a data atual
    const idade = data.getFullYear() - ano_nascimento;
    return idade
}

function calcular_idade2(ano_nascimento){
    const data = new Date();
    const idade = data.getFullYear() - ano_nascimento;
    console.log(idade);
}

function formata_mes(mes){
    const data = new Date();
    mes = data.getMonth();
    switch (mes) {
        case 0:
            return 'Janeiro';
            break;
        case 1:
            return 'Fevereiro';
            break;
        case 2:
            return 'Março';
            break;
        case 3:
            return 'Abril';
            break;
        case 4:
            return 'Maio';
            break;
        case 5:
            return 'Junho';
            break;
        case 6:
            return 'Julho';
            break;
        case 7:
            return 'Agosto';
            break;
        case 8:
            return 'Setembro';
            break;
        case 9:
            return 'Outubro';
            break;
        case 10:
            return 'Novembro';
            break;
        case 11:
            return 'Dezembro';
            break;       
    }

}

let ret = calcular_idade1(1998);
// console.log(ret);

// calcular_idade2(1998);
const data = new Date();
console.log(`Data completa: ${data}`);

console.log(`Ano: ${data.getFullYear()}.`);
console.log(`Mês: ${formata_mes()}.`);

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(6, 4)); // 10
console.log(somar(4)); // NaN - Not a Number
console.log(somar(6, 4, 8)); // 10
console.log(somar(6, 4, 8, 3, 2, 1, 19)); // 10