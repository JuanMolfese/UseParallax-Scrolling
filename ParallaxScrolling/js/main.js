"use strict"
let keydown = null;
var gameOver = false;

if (!gameOver){
    var container = document.querySelector('.container');
    var char = document.querySelector("#char");
    var fondo = document.querySelectorAll("div.fondo");
    var cartel_loose = document.querySelector("#cartel_loose");
    var cartel_win = document.querySelector("#cartel_win");
    var coins_counter = 3;
    var layer1 = document.querySelector(".layer-1");
    var layer2 = document.querySelector(".layer-2");
    var layer3 = document.querySelector(".layer-3");
    var layer4 = document.querySelector(".layer-4");
    var layer5 = document.querySelector(".layer-5");
    var layer6 = document.querySelector(".layer-6");

    let coin_counter_div = document.createElement('div');
    coin_counter_div.id= "coin_counter";
    coin_counter_div.innerHTML = '<p>'+`${coins_counter}`+'</p>';
    container.appendChild(coin_counter_div);
    document.body.appendChild(container);

    console.log(coins_counter);

    function jump(){
        char.classList.remove("char_jump"); 
        char.classList.add("char_run");        
    }

    function mostrar_cartel_loose(){
        cartel_loose.style.visibility='visible';
    }

    function mostrar_cartel_win(){
        cartel_win.style.visibility='visible';
    }

    function detener_fondo(){
        layer1.style.animation="pause";
        layer2.style.animation="pause";
        layer3.style.animation="pause";
        layer4.style.animation="pause";
        layer5.style.animation="pause";
        layer6.style.animation="pause";
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
            this.setTimeout(detener_fondo, 1200);
            this.setTimeout(mostrar_cartel_loose,1200);            
        }
        else if (event.key == "w") {  //EN CASO DE GANAR, ahora prueb ocon la tecla W
             
            this.setTimeout(mostrar_cartel_win,1200);            
        }       
        }
    );

}