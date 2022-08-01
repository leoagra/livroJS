function fusoHorario() {
    let inHoraBrasil = Number(document.getElementById("inHoraBrasil").value)
    let outHoraFranca = document.getElementById("outHoraFranca")
    

    if (inHoraBrasil == 0 || isNaN(inHoraBrasil)) {
        alert("Informe a hora no Brasil Corretamente")
        inHoraBrasil.focus()
        return
    }

    let horaFranca = inHoraBrasil + 5

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }

    outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2)
}

let btHoraFranca = document.getElementById("btHoraFranca")
btHoraFranca.addEventListener("click", fusoHorario)