function calculoVelocidade(){
    let inPermitida = document.getElementById("inPermitida")
    let inCondutor = document.getElementById("inCondutor")
    let outResposta = document.getElementById("outResposta")

    let veloPerm = Number(inPermitida.value)
    let veloCond = Number(inCondutor.value)

    if(veloPerm == 0 || isNaN(veloPerm)){
        alert("Velocidade Permitida está incorreta. Insira um número válido")
        inPermitida.focus()
        return
    }

    if(veloCond == 0 || isNaN(veloCond)){
        alert("Velocidade do Condutor está incorreta. Insira um número válido")
        inCondutor.focus()
        return
    }

    let multa20 = veloPerm + ((veloPerm/100) * 20)

    if(veloCond <= veloPerm){
        outResposta.textContent = "Situação: Sem Multa!"
    } else if (veloCond > veloPerm && multa20 >= veloCond){
        outResposta.textContent = "Situação: Multa Leve!"
    }else {
        outResposta.textContent = "Situação: Multa Grave!"
    }


    
   


}

let btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", calculoVelocidade)