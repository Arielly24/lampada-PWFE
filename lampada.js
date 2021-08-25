"use strict"
function ligarLampada (){
    const lampada = document.getElementById("lampada")
    lampada.src = "img/ligada.jpg"
}

document.getElementById("ligar")
.addEventListener("click", ligarLampada)

function desligarLampada (){
    const lampada = document.getElementById("lampada")
    lampada.src = "img/desligada.jpg"
}

document.getElementById("desligar")
.addEventListener("click", desligarLampada)

