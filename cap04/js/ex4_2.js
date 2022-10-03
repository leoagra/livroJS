function decrescerNumero() {
    let inNumero = document.getElementById("inNumero")
    let outResposta = document.getElementById("outResposta")

    let numero = inNumero.value

    if(numero == 0 || isNaN(numero)){
        alert("Digite um número válido.")
        inNumero.focus()
        return
    }

    var resposta = "Entre " + numero + " e 1: " //melhor usar o contador com VAR q LET

    for(var i = numero; i > 1; i-- ) {
            resposta = resposta + i + ", " 
        }
            resposta = resposta + i + "."
        outResposta.textContent = resposta 
        
    }
    

let btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", decrescerNumero)
