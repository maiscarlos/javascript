class Pessoa {
    constructor(nome, sobrenome){    // metodo contructor é obrigatorio dentro nas classes
        this._nome = nome;           // abributos
        this._sobrenome = sobrenome;
    }
    get nome(){ // getters
        return this._nome;
    }
    set nome(nome){ // setters
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){ // como está dentro de uma classe sao chamadas de metodos por isso nao tem nome.
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;     
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}.`)
    }

}

// Instanciação de Objetos - Forma 1

// const curso = new Object();  // um objeto em JS é uma coleção de dados com chave e valor.
// //    chave   valor
// curso.nome = 'Programação em JavaScript';
// curso.preco = 27.99;

// console.log(curso);

// curso['qtd_alunos'] = 999;

// console.log(curso);

// delete curso.qtd_alunos;  // deletar um

// console.log(curso);

// Instanciação de Objetos - Forma 2 - Objeto Literal
const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da Paz, 45',
            bairro: 'Nova Lima',
            cidade: 'Sao Paulo'
        },    
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'}
    
    ]
    }
}

// console.log(programa.nome);
// console.log(programa.fabricante.nome);
// console.log(programa.fabricante.filiais.length)
// console.log(programa['fabricante']['filiais']);

// programa.nome = 'AutoCad';
// console.log(programa.nome);

// delete programa.fabricante.filiais;
// console.log(programa.fabricante.filiais); // undefined
// console.log(programa.fabricante.filiais.length); //reference error

// Instanciação de Objetos - Forma 3 - Objeto Literal
// const pessoa = {};
// console.log(typeof(pessoa));
// pessoa.nome = 'Angelina';
// console.log(pessoa);

// Instanciação de Objetos - Forma 4 - Função construtora

// function Lampada(cor){
//     this.cor = cor;
// }

// const l1 = new Lampada('Branca');
// console.log(Lampada);
// console.log(typeof(Lampada));

// Instanciação de Objetos - Forma 5 - Objeto a partir das nossas classes

// const p1 = new Pessoa('Felicity', 'Jones');
// console.log(p1);
// console.log(typeof(p1));
// console.log(p1.nome);  // funcao get
// console.log(p1.sobrenome);  //funcao get

// p1.nome = 'Xuxa';
// console.log(p1);

// p1.falar('Baixinho...');
// p1.comer();
// p1.beber();

const fit = new Carro('Fit')
fit.imprimir();