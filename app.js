let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// funcao que nao devolve informacao, mas executa

//Cabeçalho do Jogo//
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
   if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo Número Secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

// funcao sem parametro, mas que retorna algo

//Gera o Numero Secreto//
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeElementosLista = listaDeNumerosSorteados.length;
  if (quantidadeElementosLista == 10) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

//Verifica se o valor do chute acertou, errou e dá dicas até que acerte//
function verificarChute() {
  let chute = document.querySelector('input').value;

<<<<<<< HEAD
<<<<<<< HEAD
  if (isNaN(chute)|| chute.trim === ''){
=======
  if (isNaN(chute)|| chute.trim() === ''){
>>>>>>> 9189fa0 (Atualizações no jogo)
=======
  if (isNaN(chute)|| chute.trim() === ''){
>>>>>>> 9189fa0365afe743ab6e3dae539d225de3eb1a9d
    exibirTextoNaTela('p','Por favor, digite um número válido!');
    limparCampo();
    return;
  }

  console.log(`O Número secreto é ${numeroSecreto}`);
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Parabéns!');
    let quantidadeTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela('p', `Você descobriu o Número Secréto! Com ${tentativas} ${quantidadeTentativas}!`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroSecreto > chute) {
      exibirTextoNaTela('p', 'O número secreto é maior.');
    } else {
      exibirTextoNaTela('p', 'O número secreto é  menor');
    }
    console.log(`O Número de tentativas ${tentativas}`);
    tentativas++;
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}