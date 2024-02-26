let palabras = ["SOL", "ARBOL", "COLEGA"];
let palabraSecreta = "";


function iniciarJuego(){
    borrarAhorcado();
    seleccionarPalabra();
    baseAhorcado();
    baseLetras();

}

function seleccionarPalabra(){
    let pal = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = pal;
}

function obtenerLetra(letra){
    let btnSeleccionado = document.getElementById("tecla"+letra);
    if (palabraSecreta.includes(letra)) {
        btnSeleccionado.disabled = true;
        btnSeleccionado.style.backgroundColor = "green"
        ctx.font = "30px Arial";
        ctx.fillText(letra, 10, 50 );
        tx.stroke();
    } else {
        btnSeleccionado.disabled = true;
        btnSeleccionado.style.backgroundColor = "red"
    }
}

function mostrarLetra(){

}