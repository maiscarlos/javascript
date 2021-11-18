// Criando uma função construtora

function Pessoa(n, s, raca = 'Humana'){
    // atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    // método privado, só conseguimos fazer uso dentro da função construtora.
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    // método público, conseguimos acessar fora da função contrutora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }
    this.getIdade = function(){
        return idade; 
    }
}

// Instanciando um objeto
const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina);

console.log(angelina.peso); // privado

console.log(angelina.raca); // publico

angelina.fazer_aniversario();
angelina.fazer_aniversario();

// Instanciando um novo objeto

const felicity = new Pessoa('Felicity', 'Feminino');
felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa)); // function
console.log(typeof(felicity)); //object



