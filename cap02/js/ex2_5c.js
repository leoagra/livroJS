function verPromocao(){
    let inProduto = document.getElementById("inProduto")
    let inPreco = document.getElementById("inPreco")
    let outPromocao = document.getElementById("outPromocao")
    let outPromocao2 = document.getElementById("outPromocao2")

    let produto = inProduto.value
    let preco = Number(inPreco.value)

    //equação--------------------------
    let desconto = preco / 2
    let precoTotal = (preco * 2) + desconto


    //equação-------------------------


    outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + precoTotal.toFixed(2)
    outPromocao2.textContent = "O 3º produto custa apenas R$: " + desconto.toFixed(2)

}

let btPromocao = document.getElementById("btPromoacao")
btPromocao.addEventListener("click", verPromocao)