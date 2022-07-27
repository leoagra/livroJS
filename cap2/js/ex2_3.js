function VerPromocao(){
    //criar referencia dos elementos da página e obter conteúdo dos campos de entrada
    let inVeiculo = document.getElementById("inVeiculo")
    let inPreco = document.getElementById("inPreco")
    let outVeiculo = document.getElementById("outVeiculo")
    let outPreco = document.getElementById("outPreco")
    let outSaldo = document.getElementById("outSaldo")

    //obter conteúdo dos campos de entrada
    let veiculo = inVeiculo.value
    let preco = Number(inPreco.value)

    //obtendo o valor de entrada e parcelas do saldo
    let entrada = preco / 2
    let saldo = entrada / 12

    //altera o conteúdo do paragrafo de respos
    outVeiculo.textContent = "Promoção: " + veiculo
    outPreco.textContent = "Entrada de R$: " + entrada.toFixed(2)
    outSaldo.textContent = "+ 12x de R$: " + saldo.toFixed(2)


}

//referencia ao elemento botão
let btPromocao = document.getElementById("btPromocao")

//registra o evento
btPromocao.addEventListener("click", VerPromocao)
