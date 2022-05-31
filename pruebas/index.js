var img = new Image();
img.src = "./imagenPrueba.jpg";
const alto = img.height;
const ancho = img.width;
console.log("altura", alto);
console.log("ancho", ancho);
// console.log(img);



function draw(){
var canvas = document.getElementById("imagen");
canvas.width = 400;
canvas.height =400 ;
var ctx = canvas.getContext("2d");
ctx.drawImage(img,75,75,225,225);
var imageData = ctx.getImageData(75,75,225,225);
var pixels = imageData.data;

console.log(pixels);

let arrayImage=Object.values(pixels);
let index=[]
let siguiente=[];

function arraySimple() {
    for (let i=2;i<arrayImage.length;i=i+4){
        siguiente.push(arrayImage[i]);
        index.push(i);
    } 
    return siguiente
}
arraySimple()
console.log(siguiente)
// console.log(index)

let media;
function standardDeviation(arr){
    media = arr.reduce((acc, curr)=>{
    return acc + curr
}, 0) / arr.length;
    
arr = arr.map((item)=>{
    return (item - media) ** 2 
})

let total = arr.reduce((acc, curr)=> acc + curr, 0);

return Math.sqrt(total / arr.length)
}

console.log("desvStd=",standardDeviation(siguiente),"   media=",media)

    
    let copiaArray=[]
    let matrizImage=[];
function matriz(arr,ancho){
    copiaArray=arr.slice(0,arr.length)
    // console.log("matriz.length=",copiaArray.length)
    // console.log("copiaArray=",copiaArray)
    let i=0
    while (i<=copiaArray.length+1){
        let filas=[];
        filas=copiaArray.splice(0,ancho);
        console.log(filas)
        matrizImage.push(filas)
        i++
    }
    console.log("matrizImage=",matrizImage)
}
 matriz(siguiente,ancho)

}

window.addEventListener( "load", draw, false );

