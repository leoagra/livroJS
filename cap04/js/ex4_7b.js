
function mostra() {
    var inChinchila = document.getElementById("inChinchila")
    var inAnos = document.getElementById("inAnos")
    var outResposta = document.getElementById("outResposta")

    var chinchila = Number(inChinchila.value)
    var ano = Number(inAnos.value)

    if(chinchila == 0 || isNaN(chinchila)){
        alert("Digite um número válido")
        inChinchila.focus()
        return
    } else if ( ano == 0 || isNaN(ano)){
        alert("Digite um número válido")
        inAnos.focus()
        return
    }

    var chin = ""
    var ctotal = chinchila

    for(var i = 1; ano >= i; ano-- ) {
        if(i == ano){
            ctotal = ctotal
        } else if (i < ano) {
            ctotal = ctotal * 3
        }
        var chin = chin + ano + "º Ano: " + ctotal +" Chinchilas" + "\n"
    }

    outResposta.textContent = chin

}
    
var btPrevisao = document.getElementById("btPrevisao")
btPrevisao.addEventListener("click", mostra)