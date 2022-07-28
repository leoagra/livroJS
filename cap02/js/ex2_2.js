function converterDuracao(){
    //Criar referência aos elementos
    let inTitulo = document.getElementById("inTitulo")
    let inDuracao = document.getElementById("inDuracao")
    let outTitulo = document.getElementById("outTitulo")
    let outResposta = document.getElementById("outResposta")

    //obtendo o conteúdo do campo de entrada
    let titulo = inTitulo.value
    let duracao = Number(inDuracao.value)

    //arredonda para baixo  o resultado da divisão
    let hora = Math.floor(duracao / 60)
    // obtém o resto da divisão entre números
    let minuto = duracao % 60

    //altera o conteúdo dos parágrafos de resposta
    outTitulo.textContent = titulo
    outResposta.textContent = hora + " hora(s) e " + minuto + " minuto(s)."
}

//cria uma variável ao elemento btConverter (botão)
let btConverter = document.getElementById("btConverter")
//registra um evento associado ao botão, para carregar a função
btConverter.addEventListener("click", converterDuracao)