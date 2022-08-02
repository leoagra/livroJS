function limpo(){
    location.reload()
    document.getElementById("inLadoA").focus()
}

function calculoTriangulo(){
    let inLadoA = Number(document.getElementById("inLadoA").value)
    let inLadoB = Number(document.getElementById("inLadoB").value)
    let inLadoC = Number(document.getElementById("inLadoC").value)
    let outPossibilidade = document.getElementById("outPossibilidade")
    let outTriangulo = document.getElementById("outTriangulo")

    let ab = inLadoA + inLadoB
    let bc = inLadoB + inLadoC
    let ac = inLadoA + inLadoC

    if(inLadoA == 0 || isNaN(inLadoA)){
        alert("Digite um valor válido")
        document.getElementById("inLadoA").focus()
        return
    }else if(inLadoB == 0 || isNaN(inLadoB)){
        alert("Digite um valor válido")
        document.getElementById("inLadoB").focus()
        return
    }else if(inLadoC == 0 || isNaN(inLadoC)){
        alert("Digite um valor válido")
        document.getElementById("inLadoC").focus()
        return
    }

    if(inLadoA > bc || inLadoB > ac || inLadoC > ab){
        outPossibilidade.textContent = "Não é possível formar um Triângulo"
        outTriangulo.textContent = "Um lado não pode ser maior que a soma dos outros dois."
    }else if(inLadoA == inLadoB && inLadoB == inLadoC){
        outPossibilidade.textContent = "Lados podem formar um triângulo"
        outTriangulo.textContent = "Tipo: Equilátero"
    }else if(inLadoA == inLadoB || inLadoB == inLadoC || inLadoC == inLadoA){
        outPossibilidade.textContent = "Lados podem formar um triângulo"
        outTriangulo.textContent = "Tipo: Isóceles"
    } else {
        outPossibilidade.textContent = "Lados podem formar um triângulo"
        outTriangulo.textContent = "Tipo: Escaleno"
    }  
}

let btLados = document.getElementById("btLados")
btLados.addEventListener("click", calculoTriangulo)

let btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limpo)