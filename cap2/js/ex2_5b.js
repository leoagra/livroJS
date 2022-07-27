function calculoPagar(){
    let inValor = document.getElementById("inValor")
    let inTempo = document.getElementById("inTempo")
    let outResposta = document.getElementById("outResposta")

    let valor = inValor.value
    let tempo = Number(inTempo.value)

    //calculo a ser feito
    let valor1 = Math.ceil(tempo / 15)
    let valor2 = (valor * valor1) 
    
    
    outResposta.textContent = "Valor a Pagar R$: " + valor2.toFixed(2)


}

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calculoPagar)