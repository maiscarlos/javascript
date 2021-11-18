// bg = document.querySelector('body');
// btnRed = document.querySelector('#red');
// btnGreen = document.querySelector('#green');
// btnBlue = document.querySelector('#blue');

// btnRed.onclick = function(){
//     bg.style.backgroundColor = '#FF0000';
// }

// btnGreen.onclick = function(){
//     bg.style.backgroundColor = '#00FF00';
// }

// btnBlue.onclick = function(){
//     bg.style.backgroundColor = '#0000FF';
// }

let botoes = document.querySelectorAll('button');

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        document.querySelector('body').style.backgroundColor = 
            this.getAttribute('class').split('-')[1];
    }
}
