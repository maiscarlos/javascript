// concatenar

let idade = 19;
const nome = 'Geek';

function soma_3(idade){
    return idade + 3;
}

console.log(nome + ' tem ' + idade + ' anos.')

//template string
console.log(`${nome} tem ${soma_3(idade)} anos.`);