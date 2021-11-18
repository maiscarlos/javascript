/* 
JSON - JavaScript Object Notation
API - APlication Interface

*/

const curso = {
    nome: 'Programação em JavaScript',
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}

// console.log(curso);
// // console.log(curso.preco());
// console.log(typeof(curso));

// // Convertendo o objeto JavaScript para JSON.

// const json = JSON.stringify(curso);
// console.log(json); // JSON
// console.log(typeof(json));

// // convertendo de JSON para Objeto JavaScript
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof(obj));

// const json_errado = "{'nome': 'Programação em JavaScript', 'preco': 27.99}"; // aspas simples nas chaves e valores
const json_corrigido = '{"nome": "Programação em JavaScript", "preco": 27.99}';
const novo_obj = JSON.parse(json_corrigido);
console.log(novo_obj);
console.log(typeof(novo_obj));
