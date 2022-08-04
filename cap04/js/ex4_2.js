function decrescerNumero() {
    let = inNumero = document.getElementById("inNumero")
    let outResposta = document.getElementById("outResposta")

    let numero = inNumero.value

    if(numero == 0 || isNaN(numero)){
        alert("Digite um número válido.")
        inNumero.focus()
        return
    }

    let resposta = "Entre " + numero + " e 1: "

    for(let i = numero; i > 0; i-- ) {
        resposta = resposta + i + ", "
    }
    outResposta.textContent = resposta
}

let btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", decrescerNumero)
