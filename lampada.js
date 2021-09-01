"use strict"

let idligar
let iddesligar

function piscarLampada(){
    const botaoPiscar = document.getElementById("piscar")
    if(botaoPiscar.textContent == "Piscar"){

        idligar = setInterval(ligarLampada, 200)
        iddesligar = setInterval(desligarLampada,400)
        document.getElementById("piscar").textContent = "Parar"

    } else{
        pararDePiscar()
        botaoPiscar.textContent = "Piscar"
    }

}
function pararDePiscar(){
    clearInterval(idligar)
    clearInterval(iddesligar)
}

function lampadaQuebrada(){
    const lampada = document.getElementById("lampada")
    return lampada.src.includes("quebrada") 
}

function quebrarLampada() {
    const lampada = document.getElementById("lampada")
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")

    lampada.src = "img/quebrada.jpg"
    botaoLigar.disable = false
    botaoDesligar.disable = true    
}

setTimeout(ligarLampada, 5000); 


function ligarLampada (){
    const lampada = document.getElementById("lampada")
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")

    if (!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        botaoLigar.disable = true
        botaoDesligar.disable = false
       
    }


}


function desligarLampada (){
    const lampada = document.getElementById("lampada")
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")

    lampada.src = "img/desligada.jpg"
    botaoLigar.disable = false
    botaoDesligar.disable = true
}


document.getElementById("desligar")
.addEventListener("click", desligarLampada)

document.getElementById("ligar")
.addEventListener("click", ligarLampada)


document.getElementById("lampada")
.addEventListener("mouseover", ligarLampada)

document.getElementById("lampada")
.addEventListener("mouseleave", desligarLampada)

document.getElementById("lampada")
.addEventListener("dblclick", quebrarLampada)

document.getElementById("piscar")
.addEventListener("click", piscarLampada)



