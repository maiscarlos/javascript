const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}

// console.log(curso);
// console.log(typeof(curso));

// console.log(Object.keys(curso));  // retorna chaves do objeto
// console.log(Object.values(curso)); // retorna valor

// console.log(Object.entries(curso)); // retorna todas as entradas

// Iterando 
// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`);
    
// });

// Object.entries(curso).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
    
// });

// curso.nome = 'Criação de APIs Rest com Django Rest Framework';
// console.log(curso);

// Definindo um objeto como somente leitura
// Object.defineProperty(curso, 'publicacao',{
//     enumerable: true, //nao mostra normalmente
//     writable: false, // nao pode ser modificado
//     value: '07/12/2019' // valor
// })

// curso.publicacao = '01/01/2020'
// console.log(curso);
// console.log(curso.publicacao);

// Object.freeze(curso); //congela o objeto como somente leitura
// curso.nome = "PHP";
// console.log(curso);

const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek university'},
    {nome: 'Ricardo Brandão', empresa: 'Google'},
    {nome: 'Felipe Xavier', empresa: 'Sony'}

]

console.table(usuarios);
console.table(curso);