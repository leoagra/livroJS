function verificarPrimo() {
    //cria referencia aos elementos
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var num = Number(inNumero.value) //obter o valor contido dentro de inNumero

    //verificar se preencheu corretamente o campo inNumero
    if(num == 0 || isNaN(num)){
        alert("Número inválido...")
        inNumero.focus()
        return
    }
    var numDivisores = 0 //declara e inicia o contador

    //percorre todos os possíveis divisores do numero

    for(var i = 1; i <= num; i++){
        //verifica se é divisor do num
        if(num % i == 0){
            numDivisores++  // se é, incrementa contador
        }
    }
   // se possui apenas 2 divisores, é primo
   if(numDivisores == 2){
    outResposta.textContent = num + " É primo"
   } else {
    outResposta.textContent = num + " Não é primo"
   }
}

var btVerificarPrimo = document.getElementById("btVerificarPrimo")
btVerificarPrimo.addEventListener("click", verificarPrimo)