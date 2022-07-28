function calcularMedia(){
    let inNome = document.getElementById("inNome")
    let inNota1 = document.getElementById("inNota1")
    let inNota2 = document.getElementById("inNota2")
    let outMedia = document.getElementById("outMedia")
    let outResultado = document.getElementById("outResultado")

    let nome = inNome.value
    let nota1 = Number(inNota1.value)
    let nota2 = Number (inNota2.value)
    let media = (nota1 + nota2) / 2

    outMedia.textContent = "Média das Nota: " + media.toFixed(1)

    //condição-------
    if (media >= 7) {
         outResultado.textContent = "Parabéns " + nome + "! Você foi Aprovado(a)"
         outResultado.style.color = "blue"
    } else if (media >= 4) {
        outResultado.textContent = "Atenção " + nome + ". Você está em Exame."
        outResultado.style.color = "green"
        
    }  else {
        outResultado.textContent = "Ops " + nome + " ...Você foi reprovado(a)"
        outResultado.style.color = "red"
    }
        
}
    
    let btMedia = document.getElementById("btMedia")
    btMedia.addEventListener("click", calcularMedia)