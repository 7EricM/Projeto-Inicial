let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibitTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibitTextoNaTela('h1','Jogo do número secreto')
    exibitTextoNaTela('p','Escolha um número entre 1 e 50')
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numerosecreto) {
        exibitTextoNaTela ('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibitTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numerosecreto) {
            exibitTextoNaTela ('p', 'O número secreto é menor');
        } else {
            exibitTextoNaTela ('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista ==3) {
    listaDeNumerosSorteados = [];
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
        } else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled',true);
}

