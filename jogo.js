var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search
var criaMosquitoTempo = 1500

nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'muitoDificil') {
    criaMosquitoTempo = 750
}

var cronometro = setInterval (function(){
    tempo -= 1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
        alert('vitoria')
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    //console.log(largura, altura)
}

//Gerar posições aleatórias
function posicaoRandomica() {
    //Remover o mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3){
        window.location.href = 'fim_de_jogo.html'
        } else {
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
        }
    }

var positionX = Math.floor(Math.random() * largura) - 90 //Math.floor arredonda para baixo
var positionY = Math.floor(Math.random() * altura) - 90 //Math.floor arredonda para baixo
if (positionX < 0) {
    positionX = 0
}
if (positionY < 0) {
    positionY = 0
}

console.log(positionX, positionY)

//Criar elemnto HTML
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = positionX + 'px' //concatenação de string com variável
mosquito.style.top = positionY + 'px' //concatenação de string com variável
mosquito.style.position = 'absolute' //para o elemento ficar em posição absoluta
document.body.appendChild(mosquito)
mosquito.id = 'mosquito'
mosquito.onclick = function() {
    this.remove()
}
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    //console.log(classe)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    //console.log(classe)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
}
}


//Inicio das chamações:
ajustaTamanhoPalcoJogo()
tamanhoAleatorio()