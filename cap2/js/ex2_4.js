function calcularPreco(){
    let inBuffet = document.getElementById("inBuffet")
    let inConsumo = document.getElementById("inConsumo")
    let outResposta = document.getElementById("outResposta")

    let valor = Number(inBuffet.value)
    let cliente = Number(inConsumo.value)

    let total = valor * (cliente / 1000)

    outResposta.textContent = "Valor a pagar R$: " + total.toFixed(2)

}

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPreco)
