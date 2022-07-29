function raizQuadrada() {
    let inNumero = document.getElementById("inNumero")
    let outResultado = document.getElementById("outResultado")

    let numero = Number(inNumero.value)
    let resultado = Math.sqrt(numero)

    if(numero == 0 || isNaN(numero)){
        alert("Digite um valor válido.")
        numero.focus()
        return
    }

    if(resultado == Math.floor(resultado)) {
        outResultado.textContent = "A raiz quadrade de " + numero + " é " + resultado
    }else {
        outResultado.textContent = "Não há raiz exata para o número " + numero
    }

}

let btRaiz = document.getElementById("btRaiz")
btRaiz.addEventListener("click", raizQuadrada)