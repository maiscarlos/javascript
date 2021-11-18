//Temos que referenciar o input
let input = document.querySelector('input[name=tarefa]');


//Temos que referenciar o button
let btn = document.querySelector('#botao');


//Temos que referenciar a lista
let lista = document.querySelector('#lista');

// Referenciando o card
let card = document.querySelector('.card');

// fazendo com que o array seja criado a partir do storage do navegador se nao ouver, lista vazia
let tarefas = JSON.parse(localStorage.getItem('tarefas_salvas')) || [];

function renderizarTarefas(){

    // Limpar a listagem de itens antes de renderizar novamente a tela
    lista.innerHTML = '';
    for(tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li');

        //Adicionar classe no item da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //Adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefas(this);
        }

        //Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        //Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto);

        //adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

// Executando a função para renderizar as tarefas
renderizarTarefas();

// 1) Precisamos 'escutar' o evento de clique no botão
btn.onclick = function(){
    // 2) Precisamos capturar o valor digitado pelo usuario no input
    let novaTarefa = input.value;

    if(novaTarefa !== ''){
        // 3) Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
        tarefas.push(novaTarefa);

        // Executando a função para renderizar as tarefas
        renderizarTarefas();

        // Limpar o input
        input.value = '';

        // Limpar mensagens de erro
        removerSpans();

        // Salva o banco de dados no navegador.
        salvarDadosNoStorage();

    } else {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');
        let msg = document.createTextNode('Você precisa informar uma tarefa!');
        span.appendChild(msg);
        card.appendChild(span);
    }
}

function removerSpans(){
    // seleciona todos spans
    let spans = document.querySelectorAll('span');   

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefas(tar){
    // Remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    // Renderiza novamente
    renderizarTarefas();

    // Salva o banco de dados no navegador.
    salvarDadosNoStorage();
}

function salvarDadosNoStorage(){
    // todo navegador web possui esta capacidade
    localStorage.setItem('tarefas_salvas', JSON.stringify(tarefas));
}
