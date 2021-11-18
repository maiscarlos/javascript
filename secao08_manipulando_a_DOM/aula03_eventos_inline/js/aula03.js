function mostrarAlerta(){
    alert('O Botão foi clicado!');
}

function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando...';
}

function mudarCor(){
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1);
    document.body.style.backgroundColor = cores[numero];
}

function escreveTexto(){
    let span = document.getElementById('texto');
    span.innerHTML = input.value;

}