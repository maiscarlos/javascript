// Destructuring com array

const numeros = [1, 3, 5, 7]

const [num1, num2, num3, num4] = numeros;

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

//podemos descartar valores
const [n1, , n3, n4] = numeros;
// console.log(n1);
// console.log(n3);
// console.log(n4);

//podemos colocar valor default que será usado caso não haja no container
const [nu1, nu2, nu3, nu4 = 32, nu5 = 99] = numeros;

// console.log(nu1);
// console.log(nu2);
// console.log(nu3);
// console.log(nu4);
// console.log(nu5);

// Destructuring com objeto

const produto = {
    nome: 'Playstation 4',
    preco: 1678.44
}

const {nome, preco} = produto;

console.log(`${nome} custa R$ ${preco}.`)