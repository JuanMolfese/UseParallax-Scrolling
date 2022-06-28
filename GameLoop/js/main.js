/* //Itero todo esto
    init(); //inicia puntaje, personaje, fondo, etc
    processInput(); // leer teclas
    updateState(); // mover personaje, animacion
    draw(); //dibujo escena, actualizo posicion de las cosas, etc

//Termino
end();// Presiona ESC o Perdi la vida o Gane
 */

let start, previousTimeStamp;
var keyDown = false;

function step(timestamp){
    console.log(timestamp);

    if (start === undefined) {
        start = timestamp;
    }
    
    const elapsed = timestamp-start;
    
    if(keyDown)
        console.log('space');
    else
        console.log('No se presiono space');
    
    if (elapsed < 10000) {//detiene animacion despues de 10 segundos
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(step);
    }
    else
        console.log('FIN');
}

window.requestAnimationFrame(step);

document.addEventListener("keydown", (e)=> {
  if (e.key === ' ') {
    e.preventDefault();    
    keyDown = true;
  }
});