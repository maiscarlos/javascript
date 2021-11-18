const NovaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10); // gera um número inteiro entre 0 e 0
    setInterval(() => {
        if (valor % 2 === 0){
            resolve(`O valor ${valor} é par!`);
        } else {
            reject(`O valor ${valor} é ímpar!`);
        }
    }, 2000);
});

async function executarPromise(){
    try{
        const response = await NovaPromise();
        console.log(response);
    }catch(erro){
        console.log(erro);
    }
}

executarPromise();
