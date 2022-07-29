function calcularPeso(){
    //criar referência aos elementos manipulados pela function
    let inNome = document.getElementById("inNome")
    let rbMasculino = document.getElementById("rbMasculino")
    let rbFeminino = document.getElementById("rbFeminino")
    let inAltura = document.getElementById("inAltura")
    let outResultado = document.getElementById("outResultado")

    // obtém o conteúdo dos campos de edição da página
    let nome = inNome.value
    let masculino = rbMasculino.checked
    let feminino = rbFeminino.checked
    let altura = Number(inAltura.value)

    //verifica se o nome foi preenchido e sexo selecionado

    if(nome == "" || (masculino == false && feminino == false) ){
        alert("Por favor, informe o nome e selecione o sexo...")
        inNome.focus() // posiciona (joga o foco) no campo de edição inNome
        return
    }

    //se altura vazio (0) ou Nan: Not-a-Number (um texto for informado por exemplo)
    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente...")
        inAltura.focus()
        return
    }

    //se masculino for = true
    if(masculino){
        var peso = 22 * Math.pow(altura, 2)
    }else {
        var peso = 21 * Math.pow(altura, 2)
    }

    //apresenta a resposta (altera o conteúdo da linha resposta)

    outResultado.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg"

}

function limparCampos (){
    // recarrega a página
    location.reload()
    //posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus() // não está voltando
}

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPeso) //não precisa do "onclick" pois vai ser chamado no evento

let brLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)