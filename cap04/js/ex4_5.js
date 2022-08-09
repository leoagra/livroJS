//declara e inicializa contadores e acumuladores (variáveis Globais)
var numContas = 0
var valTotal = 0

//variável string que acumula as contas
var resposta = ""

function registrarConta() {
    //Cria referência aos elementos da página
    var inDescricao = document.getElementById("inDescricao")
    var inValor = document.getElementById("inValor")
    var outListaContas = document.getElementById("outListaContas")
    var outTotal = document.getElementById("outTotal")

    //obtem o conteúdo dos campos

    var descricao = inDescricao.value
    var valor = Number(inValor.value)

    //verifica preenchimento dos campos

    if(descricao == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente...")
        inDescricao.focus()
        return
    }

    //adiciona valores ao contator e acumulador

    numContas = numContas + 1 // ou numContas++ - Contador
    valTotal = valTotal + valor // Acumulador

    //concatena as respostas

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"

    //altera o conteúdo das tags de respsota

    outListaContas.textContent = resposta + "--------------------------------"
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2) // Resposta do acumulador e contador

    //limpa campos e posiciona curso em inDescricao

    inDescricao.value = ""
    inValor.value = ""
    inDescricao.focus()

}

//referencia elemento e após associar function ao evento click

var btRegistrar = document.getElementById("btRegistrar")
btRegistrar.addEventListener("click", registrarConta)