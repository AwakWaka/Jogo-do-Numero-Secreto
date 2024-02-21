let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function textoExibido(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2});
}

function exibirMensagem(){
    textoExibido('h1', 'Jogo do Número Secreto');
    textoExibido('p', 'Escolha um número entre 1 a 10');
}

exibirMensagem();

function verificarChute() {
        let chute = document.querySelector('input'). value;

        if(chute == numeroSecreto) {
            textoExibido('h1', 'Acertou!');

            let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
            let numeroTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}, parabéns!!`;

            textoExibido('p', numeroTentativas );
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            if(chute > numeroSecreto){
                textoExibido('p', 'O número secreto é menor')
            }else {
                textoExibido('p', 'O número secreto é maior')
            }
        } 
        tentativas++;
        limparCampo();
}

function gerarNumero() {
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

 let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

 if(quantidadeDeElementosDaLista == numeroLimite){
    listaDeNumerosSorteados = [];
 }
 if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumero();
 } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
 }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disable', true);
}