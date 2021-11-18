// Axios
let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    // limpa a DIV
    div.innerHTML = '';

    // cria no span
    let spanNome = document.createElement('span');

    // cria o txtNome
    let txtNome = '';

    // recupera o input
    let github_user = document.querySelector('input[name=github_user]');
    let user = github_user.value;


    // GET, POST, PUT, DELETE
    axios.get(`https://api.github.com/users/${user}`)
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                let br = document.createElement('br');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');
                div.appendChild(img);
                div.appendChild(br);

            } else {
                txtNome = document.createTextNode('O usuário "' + user + '" não possui um nome definido.'); 
            }
            //adiciona o conteudo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

        })
        .catch(function(error){
            txtNome = document.createTextNode('O usuário "' + user + '" não existe.');
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });
    // limpando o input
    github_user.value = '';

}