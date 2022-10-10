function repetirFruta(){
    var inFruta = document.getElementById("inFruta")
    var inNumero = document.getElementById("inNumero")
    var outFrutas = document.getElementById("outFrutas")

    var num = Number(inNumero.value)
    var fruta = inFruta.value
    
    if(num == 0 || isNaN(num)){
        alert("Digite um número válido")
        inNumero.focus()
        return
    } 

    var cont = ""

    for(var i = 1; i <= num; i++){
        if(num > i){
            cont = cont + fruta + "*" 
        } else {
            cont = cont + fruta + ""
        }
        
    }
    outFrutas.textContent = cont
}

var btRepetir = document.getElementById("btRepetir")
btRepetir.addEventListener("click", repetirFruta)