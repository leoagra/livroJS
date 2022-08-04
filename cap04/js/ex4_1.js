function mostrarTabuada() {
    //cria referência do elementos da página
    let inNumero = document.getElementById("inNumero")
    let outTabuada = document.getElementById("outTabuada")

    //Converte o conteúdo do campo inNumero
    let numero = inNumero.value

    //valida o número
    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido.")
        inNumero.focus()
        return
    }

    //cria uma variável do tipo STRING, que irá concatenar a respsota
    let resposta = ""

    //cria um laço de repetição
    for(let i = 1; i <= 10; i++){
        //a variável resosta vai acumulando os novos conteúdos
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n"
    }

    //o conteúdo da teg PRE é alterado para exibir a tabuada do num
    outTabuada.textContent = resposta
}

let btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", mostrarTabuada)