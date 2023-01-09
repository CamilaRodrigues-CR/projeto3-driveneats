function PratoSelecionado(pratoEscolhido) {
   const pratoAnterior = document.querySelector('.OpcaoPratoSelecionado');

    if (pratoAnterior !== null) {
     pratoAnterior.classList.remove('OpcaoPratoSelecionado');
    }
     pratoEscolhido.classList.add('OpcaoPratoSelecionado');

}
    


function BebidaSelecionada(bebidaEscolhida) { 
    const bebidaAnterior = document.querySelector('.OpcaoBebidaSelecionada');

    if (bebidaAnterior !== null) {
        bebidaAnterior.classList.remove('OpcaoBebidaSelecionada');
    }
    bebidaEscolhida.classList.add('OpcaoBebidaSelecionada');
   
}

function SobremesaSelecionada(sobremesaEscolhida) {
    const sobremesaAnterior = document.querySelector('.OpcaoSobremesaSelecionada');

    if (sobremesaAnterior !== null) {
        sobremesaAnterior.classList.remove('OpcaoSobremesaSelecionada');
    }
    sobremesaEscolhida.classList.add('OpcaoSobremesaSelecionada');

}