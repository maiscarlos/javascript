//lexicos

// let xuxa = 'global';  //pode ser acessada globalmente no nosso programa

// function imprimir(){
//     console.log(xuxa);
// }

// function outra(){                                                           //  |
//     let xuxa = 'local'; // pode ser acessada localmente no bloco/contexto       |
//     imprimir(); //                                                              | Closure
//     console.log(xuxa); // local                                                 |
// } //                                                                            |

// outra(); //

// novo exemplo
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna (){
        return variavel;
    }
return interna;
}

let executa = externa();
console.log(executa());  // local

/*
    Estamos estudando Closures (contexto léxico de uma função)

    Existe um Linguagem de Programação chamada Clojure 
*/
