var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function baseAhorcado(){
    ctx.lineWidth =5;
    
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.strokeStyle = "black" ;
    
    ctx.fillRect(0, 0, 700,400);
    ctx.beginPath();
    ctx.moveTo(250, 240);
    ctx.lineTo(470, 240);
    ctx.moveTo(260, 240);
    ctx.lineTo(280, 5);
    ctx.moveTo(270, 10);
    ctx.lineTo(375, 10);
    ctx.moveTo(370, 10);
    ctx.lineTo(370,30);
    ctx.stroke();
    ctx.closePath();
}

function borrarAhorcado(){
    ctx.clearRect(0,0,600,500);
}

function baseLetras(){
    ctx.lineWidth =2;
 
    let ancho=600/palabraSecreta.length;

    for(let i=0;i<palabraSecreta.length;i++){

        ctx.moveTo(80+(ancho*i),295);
        ctx.lineTo(120+(ancho*i),295);
        
    }
    ctx.stroke();
    ctx.closePath();
}