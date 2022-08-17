function preencherEstrelas() {
    var inNumero = document.getElementById("inNumero")
    var outEspaco = document.getElementById("outEspaco")

    var num = Number(inNumero.value)

    if(num == 0 || isNaN(num)){
        alert("Número inválido...")
        inNumero.focus()
        return
    }
    var estrela = ""

    for(var i = 1 ; i <= num ; i++){
        if(i % 2 == 1){
            estrelas = estrelas + "*"
        }else {
            estrelas = estrelas + "-"
        }
    }
    outEspaco.textContent = estrelas
}

var btPreencher = document.getElementById("btPreencher")
btPreencher.addEventListener("click", preencherEstrelas)