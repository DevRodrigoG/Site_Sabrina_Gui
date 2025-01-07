let contadorAcai300 = 0
let contadorAcai500 = 0
let contadorAcaiGarrafa = 0


/* Função aumentar e dimunuir açaí 300 ML */

document.getElementById('QuantidadeAcai300').innerText = contadorAcai300

function aumentarAcai300(){
    contadorAcai300 = contadorAcai300 + 1
    document.getElementById('QuantidadeAcai300').innerText = contadorAcai300
}
function diminuirAcai300(){
    if (contadorAcai300 > 0){
        contadorAcai300 = contadorAcai300 - 1
        document.getElementById('QuantidadeAcai300').innerText = contadorAcai300
    }else{
        document.getElementById('QuantidadeAcai300').innerText = contadorAcai300
        
    }
}


/* Função aumentar e dimunuir açaí 500 ML */

document.getElementById('QuantidadeAcai500').innerText = contadorAcai500

function aumentarAcai500(){
    contadorAcai500 = contadorAcai500 + 1
    document.getElementById('QuantidadeAcai500').innerText = contadorAcai500
}
function diminuirAcai500(){
    if (contadorAcai500 > 0){
        contadorAcai500 = contadorAcai500 - 1
        document.getElementById('QuantidadeAcai500').innerText = contadorAcai500
    }else{
        document.getElementById('QuantidadeAcai500').innerText = contadorAcai500
        
    }
}


/* Função aumentar e dimunuir açaí Garrafa */

document.getElementById('QuantidadeAcaiGarrafa').innerText = contadorAcaiGarrafa

function aumentarAcaiGarrafa(){
    contadorAcaiGarrafa = contadorAcaiGarrafa + 1
    document.getElementById('QuantidadeAcaiGarrafa').innerText = contadorAcaiGarrafa
}
function diminuirAcaiGarrafa(){
    if (contadorAcaiGarrafa > 0){
        contadorAcaiGarrafa = contadorAcaiGarrafa - 1
        document.getElementById('QuantidadeAcaiGarrafa').innerText = contadorAcaiGarrafa
    }else{
        document.getElementById('QuantidadeAcaiGarrafa').innerText = contadorAcaiGarrafa
        
    }
}