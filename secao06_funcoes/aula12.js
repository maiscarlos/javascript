// JS é executada linha a linha, porém em JS primeiramente ele busca as funcoes primeiro

console.log(somar(4, 6));

// let somar = function(n1, n2){  //Errado
//     return n1 - n2;
// }

//forma literal (forma padrao)
function somar(n1, n2){
    return n1 + n2;
}