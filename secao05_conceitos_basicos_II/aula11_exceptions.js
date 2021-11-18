// Tratamento de erros

// try{
//     console.log(nome);
// }catch(e){
//     console.log(`Ocorreu o erro: ${e.name}: ${e.message}.`)
// }

//lancando erros em funcoes

function dividir(num1, num2){
    if(num1 === 0 || num2 === 0){
        throw('Os valores devem ser positivos'); // lancando uma excessao (erro)
    }else{
        return num1 / num2;
    }
}
try{
    let ret = dividir(8, 0);
    console.log(ret);
}catch(e){
    console.log('Não foi possível dividir por zero!')
}finally{
    console.log('Vamos continuar...') //finally é sempre executado.
}

