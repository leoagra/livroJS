function calculoParquimetro(){
    let inValor = document.getElementById("inValor")
    let outTempo = document.getElementById("outTempo")
    let outTroco = document.getElementById("outTroco")

    let valor = Number(inValor.value)
    let tempo = ""

    if(valor == 0 || isNaN(valor)){
        alert("Digite um valor válido. \n30min - R$ 1.00 \n60min - R$ 1.75 \n120min - R$ 3.00")
        inValor.focus()
        return
    }

    switch(valor){
        case 1:
            outTempo.textContent = "Tempo: 30min"
            outTroco.textContent = "Troco R$: 0"
            break
        case 2:
            outTempo.textContent = "Tempo: 60min"
            outTroco.textContent = "Troco R$: 0.25"
            break
        case 3:
            outTempo.textContent = "Tempo: 120min"
            outTroco.textContent = "Troco R$: 0"
            break
            default:
    }


}

//let btDeposito = document.getElementById("btDeposito") redundante?
btDeposito.addEventListener("click", calculoParquimetro)