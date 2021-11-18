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
