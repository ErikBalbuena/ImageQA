

var img = new Image();
img.src = "./imagen01.jpg";
const alto = img.height;
const ancho = img.width;
console.log("altura", alto);
console.log("ancho", ancho);
console.log(img);



function draw(){
var canvas = document.getElementById("imagen");
canvas.width = ancho;
canvas.height = alto;
var ctx = canvas.getContext("2d");
ctx.drawImage(img,100,100);
var imageData = ctx.getImageData(100,100,ancho,alto);
var pixels = imageData.data;

console.log(pixels);
}

window.addEventListener( "load", draw, false );

var objeto = new Object();
objeto.src ="./CT.dcm";
console.log(objeto);








