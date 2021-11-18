let btn = document.querySelector('button');
btn.onclick = function(){
    // declara a variável de texto que será adicionado ao parágrafo
    let textElement = '';
    // Recupera o valor do input
    let inputValue = document.querySelector('input').value;
    // cria um elemento parágrafo <p></p>
    let pElement = document.createElement('p');
    // Adiciona o atributo class ao parágrafo
    pElement.setAttribute('class', 'classe-p');
    // Verifica se o usuário preencheu o input, caso contrário coloca um texto padrão
    if(inputValue !== ''){
        textElement = document.createTextNode(inputValue);
    } else {
        alert('Não pode estar vazio.');
    }
    // adiciona o texto como filho do parágrafo
    pElement.appendChild(textElement); 
    
    // recupera a div
    let divElement = document.querySelector('#app');
    //adiciona o parágrafo como filho da div
    divElement.appendChild(pElement);

    //limpa o input
    document.querySelector('input').value = '';


}