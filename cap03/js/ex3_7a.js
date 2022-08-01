function parImpar(){
    let = inNumero = document.getElementById("inNumero")
    let = outResposta = document.getElementById("outResposta")

    let = numero = Number(inNumero.value)
    
    if(numero == 0 || isNaN(numero)){
        alert("Por favor, digite um número válido!")
        inNumero.focus()
        return
    }

    let calculo = numero % 2
    
    if(calculo == 0){
       outResposta.textContent = "Resposta: " + numero + " é Par"  
       inNumero.focus()
       return  
    } else{
        outResposta.textContent = "Resposta: " + numero + " é Ímpar"
        inNumero.focus()
        return  
    }

}

let btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", parImpar)