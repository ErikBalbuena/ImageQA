
var img = new Image();


let alto;
let ancho;
function mostrar(input) {
  let img=document.getElementById("img");
  if(input.value==="Ocultar")
  {
      img.style.visibility="hidden";
      input.value="Mostrar";
  }
  else{
    img.style.visibility="visible";
    input.value="Ocultar"
  }    
}
console.log("imagen panel principal  ancho: ",img.width, "alto: ",img.height);

function previewFile() {
const preview = document.querySelector('img');
const file = document.querySelector('input[type=file]').files[0];
const reader = new FileReader();

reader.addEventListener("load", function () {
 // convierte la imagen a una cadena en base64
 preview.src = reader.result;
}, false);
if (file) {
 reader.readAsDataURL(file);
}
}

// se agregó el codigo de abajo

let pixels;
function datos(){
  alto=img.height;
  ancho=img.width;
  console.log("alto.imagen=",alto,"ancho.imagen=",ancho)
  const canvas = document.getElementById("imagen");
  console.log("alto.canvas: ",canvas.height, "ancho.canvas: ",canvas.width);
  var ctx = canvas.getContext("2d");
  var imageData = ctx.getImageData(0,0,ancho,alto);
  pixels = imageData.data;
  console.log(pixels);
  console.log(Object.values(pixels))
  var result=[];
  for (let i = 0; i < imageData.data.length; i += 4) {
    result.push(pixels[i]);
  }
  console.log(result);
  return result;
}
 
function subir(){
  let xi = document.getElementById("xi").value; 
  let xf = document.getElementById("xf").value; 
  let yi = document.getElementById("yi").value; 
  let yf = document.getElementById("yf").value; 
  function draw(x0,y0,xf,yf){
    const canvas = document.getElementById("imagen");
    console.log("alto.canvasdraw: ",canvas.height, "ancho.canvasdraw: ",canvas.width);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, x0, y0, xf-x0,yf-y0, 0, 0, canvas.width, canvas.height);
  }

  draw(xi,yi,xf,yf);

  function crearMatriz(x0,y0,xf,yf,result){
    let matriz=[];
    var h=0;
    let alto2=img.height;
    let ancho2=img.width;
    for (let k=y0; k < alto2; k++) {
      let fila=[]
      for (let j=x0; j < ancho2; j++) {
        if (j<xf){
          fila[j-x0]=result[h];
        }
        h++;
      }
      if(k<yf){
        matriz.push(fila);
      }
      
    };
    console.log(matriz);
  }

  crearMatriz(xi,xf,yi,yf, datos());
}   

