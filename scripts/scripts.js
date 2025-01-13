let contadorAcai300 = 0
let contadorAcai500 = 0
let contadorAcaiGarrafa = 0


/* Função aumentar e dimunuir açaí 300 ML */

document.getElementById('QuantidadeAcai300').innerText = contadorAcai300

function aumentarAcai300() {
    contadorAcai300 = contadorAcai300 + 1
    document.getElementById('QuantidadeAcai300').innerText = contadorAcai300
}
function diminuirAcai300() {
    if (contadorAcai300 > 0) {
        contadorAcai300 = contadorAcai300 - 1
        document.getElementById('QuantidadeAcai300').innerText = contadorAcai300
    } else {
        document.getElementById('QuantidadeAcai300').innerText = contadorAcai300

    }
}


/* Função aumentar e dimunuir açaí 500 ML */

document.getElementById('QuantidadeAcai500').innerText = contadorAcai500

function aumentarAcai500() {
    contadorAcai500 = contadorAcai500 + 1
    document.getElementById('QuantidadeAcai500').innerText = contadorAcai500
}
function diminuirAcai500() {
    if (contadorAcai500 > 0) {
        contadorAcai500 = contadorAcai500 - 1
        document.getElementById('QuantidadeAcai500').innerText = contadorAcai500
    } else {
        document.getElementById('QuantidadeAcai500').innerText = contadorAcai500

    }
}


/* Função aumentar e dimunuir açaí Garrafa */

document.getElementById('QuantidadeAcaiGarrafa').innerText = contadorAcaiGarrafa

function aumentarAcaiGarrafa() {
    contadorAcaiGarrafa = contadorAcaiGarrafa + 1
    document.getElementById('QuantidadeAcaiGarrafa').innerText = contadorAcaiGarrafa
}
function diminuirAcaiGarrafa() {
    if (contadorAcaiGarrafa > 0) {
        contadorAcaiGarrafa = contadorAcaiGarrafa - 1
        document.getElementById('QuantidadeAcaiGarrafa').innerText = contadorAcaiGarrafa
    } else {
        document.getElementById('QuantidadeAcaiGarrafa').innerText = contadorAcaiGarrafa

    }
}


// Função enviar pedido 

function EnviarPedido() {
    let descriptionAcai300 = document.getElementById('InputAcai300').value
    let descriptionAcai300Formatado = descriptionAcai300.replace(/ /g, "+")
    let textoAcai300 = contadorAcai300 + " Açaí+300ML" +"%0A%0AOBS: (" + descriptionAcai300Formatado + ")"

    let descriptionAcai500 = document.getElementById('InputAcai500').value
    let descriptionAcai500Formatado = descriptionAcai500.replace(/ /g, "+")
    let textoAcai500 = contadorAcai500 + " Açaí+500M+%0A%0AOBS: (" + descriptionAcai500Formatado + ")"

    let descriptionAcaiGarrafa = document.getElementById('InputAcaiGarrafa').value
    let descriptionAcaiGarrafaFormatado = descriptionAcaiGarrafa.replace(/ /g, "+")
    let textoAcaiGarrafa = contadorAcaiGarrafa + " Açaí+na+garrafa+%0A%0AOBS: (" + descriptionAcaiGarrafaFormatado + ")"

    // "%0A%0A"  Pular linha no link whatzapp


    // Enviar os 3 itens 
    if (contadorAcai300 >= 1 && contadorAcai500 >= 1 && contadorAcaiGarrafa >= 1) {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989043600&text=Boa+noite+meu+pedido+é:%0A%0A" + textoAcai300 + "%0A%0A" + textoAcai500 + "%0A%0A" + textoAcaiGarrafa
    }
    // Enviar somente o açai de 300 ML
    if (contadorAcai300 >= 1 && contadorAcai500 === 0 && contadorAcaiGarrafa === 0) {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989043600&text=Boa+noite+meu+pedido+é:%0A%0A" + textoAcai300
    }
    // Enviar somente o açai de 500 ML
    if (contadorAcai300 === 0 && contadorAcai500 >= 1 && contadorAcaiGarrafa === 0) {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989043600&text=Boa+noite+meu+pedido+é:%0A%0A" + textoAcai500
    }
    // Enviar somente o açai de garrafa
    if (contadorAcai300 === 0 && contadorAcai500 === 0 && contadorAcaiGarrafa >= 1) {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989043600&text=Boa+noite+meu+pedido+é:%0A%0A" + textoAcaiGarrafa
    }
    // Enviar açai de 300 ML e açai de 500 ML
    if (contadorAcai300 >= 1 && contadorAcai500 >= 1 && contadorAcaiGarrafa === 0) {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989043600&text=Boa+noite+meu+pedido+é:%0A%0A" + textoAcai300 + "%0A%0A" + textoAcai500
    }
    // Enviar açai de 300 ML e açai na garrada
    if (contadorAcai300 >= 1 && contadorAcai500 === 0 && contadorAcaiGarrafa >= 1) {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989043600&text=Boa+noite+meu+pedido+é:%0A%0A" + textoAcai300 + "%0A%0A" + textoAcaiGarrafa
    }
    //Enviar açai de 500 ML e açai na garrafa
    if (contadorAcai300 === 0 && contadorAcai500 >= 1 && contadorAcaiGarrafa) {
        window.location.href = "https://api.whatsapp.com/send?phone=5581989043600&text=Boa+noite+meu+pedido+é:%0A%0A" + textoAcai500 + "%0A%0A" + textoAcaiGarrafa
    }
    if (contadorAcai300 === 0 && contadorAcai500 === 0 && contadorAcaiGarrafa === 0) {
        alert('Para poder realizar o pedido será necessario que selecione pelo menos 1 item do cardapio!')
    }
}