function saqueNotas(){
    let inValor = document.getElementById("inValor")
    let out100 = document.getElementById("out100")
    let out50 = document.getElementById("out50")
    let out10 = document.getElementById("out10")

    let valor = Number(inValor.value)

   if(valor % 10 != 0){
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
    inValor.focus()
    return
   }

   if(valor == 0 || isNaN(valor)){
    alert("Informe o valor do saque corretamente.")
    inValor.focus()
    return
   }

   var notasCem = Math.floor(valor/100)
   var resto = valor % 100
   var notasCinquenta = Math.floor(resto / 50)
   resto = resto % 50
   var notasDez = Math.floor(resto / 10)

   if(notasCem > 0){
    out100.textContent = "Notas de R$ 100: " + notasCem
   }

   if(notasCinquenta > 0){
    out50.textContent = "Notas de R$ 50: " + notasCinquenta
   }

   if(notasDez > 0){
    out10.textContent = "Notas de R$ 10: " + notasDez
   }


}

let btSaque = document.getElementById("btSaque")
btSaque.addEventListener("click", saqueNotas)