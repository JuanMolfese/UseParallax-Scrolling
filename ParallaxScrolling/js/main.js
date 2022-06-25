"use strict"
let keydown = null;
var gameOver = false;

if (!gameOver){
    /* var char = document.querySelectorAll("div.char_run, div.char_death, div.char_jump"); */
    var char = document.querySelector("#char");
    var fondo = document.querySelectorAll("div.fondo");

    console.log(fondo);

    function jump(){
        char.classList.remove("char_jump"); 
        char.classList.add("char_run");
    }


    //EVENTOS DE TECLA --  por ej BARRA ESPACIADORA PARA SALTAR// 
    window.addEventListener("keydown", function (event) {     
        
        if (event.key == " ") {
            char.classList.remove("char_run");
            char.classList.remove("char_death");
            char.classList.add("char_jump");
            setTimeout(jump,1300);
        }
        else if (event.key == "d") {  //EN CASO DE MORIR, ahora prueb ocon la tecla D
             
            char.classList.add("char_death");
            gameOver = true;            
            detenerFondo();
            cartelAviso("Perdiste");            
        }
        }
    );

}