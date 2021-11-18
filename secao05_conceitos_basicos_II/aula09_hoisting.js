// hoisting - declara uma variável automaticamente

console.log(nome);  // undefined - aqui ocorre o hoisting (içamento)

var nome = 'Geek';

console.log(nome);

// ------------------------------

console.log(idade + 4); // NaN - Not a Number!

var idade = 23;

console.log(idade);