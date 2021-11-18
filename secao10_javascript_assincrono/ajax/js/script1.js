// Ajax (XMLHttpRequest) - Asynchronous JavaScript and XML

let btn = document.querySelector("#btn");
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function(){
    // limpar o conteudo da div
    div.innerHTML = '';

    // instanciando um objeto ajax
    let ajax = new XMLHttpRequest();

    // abrir uma conexao (GET, POST, PUT, DELETE...)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    // Enviar a requisição
    ajax.send(null);

    ajax.onreadystatechange = function(){
        // Criar um elemento span
        let spanNone = document.createElement('span');

        //criar a variavel nome
        let txtNome = '';

        /*
        ajax.readyState -> 0 -> Antes da conexao ser aberta
        ajax.readyState -> 1 -> Após abrir a conexao
        ajax.readyState -> 2 -> header (cabeçalhos) foram recebidos
        ajax.readyState -> 3 -> carregando o corpo da requisição (conteudo/dados)
        ajax.readyState -> 4 -> O conteúdo (dados) estão pronto para uso.
        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                //transforma os dados JSON para array
                usuario =JSON.parse(ajax.responseText);

                //se usuário tiver nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);
                } else {
                    txtNome = document.createTextNode(`O usuário ${input.value} não tem nome.`);                   
                }
                 //Adiciona o texto ao span e o span a div
                 spanNone.appendChild(txtNome);
                 div.appendChild(spanNone);
                 //limpar o input
                 input.value = '';
            } else {
                txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
                //limpar o input
                
            }
        } 
    }
}