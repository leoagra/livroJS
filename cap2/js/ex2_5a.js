function mostrarPromocao(){
    let inMedicamento = document.getElementById("inMedicamento")
    let inPreco = document.getElementById("inPreco")
    let outResposta = document.getElementById("outResposta")
    let outPromocao = document.getElementById("outPromocao")

    let medicamento = inMedicamento.value
    let preco = Number(inPreco.value)
    let promocao = Math.floor(preco) * 2

    outResposta.textContent = "Promoção de " + medicamento
    outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2)
}

let btPromocao = document.getElementById("btPromocao")
btPromocao.addEventListener("click", mostrarPromocao)