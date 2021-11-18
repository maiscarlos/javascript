class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca();
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
    imprimir_dados(){
        console.log(`${this._marca} ${this.modelo}`);
    }

    static retornar_marca(){
        return 'Honda';
    }
}

// const fit = new Carro('Fit');

//fit.imprimir_dados();
//fit.imprimir_dados(fit.marca);

console.log(Carro.retornar_marca())

//Object.defineProperty()

console.log((Math.random() * 100).toFixed(0));