function mostrar(input) {
  let img2=document.getElementById("img");
  if(input.value==="Ocultar")
  {
      img2.style.visibility="hidden";
      input.value="Mostrar";
  }
  else{
    img2.style.visibility="visible";
    input.value="Ocultar"
  }    
}


var img = new Image();
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
function datos(x0,y0,xf,yf){
  let alto=img.height;
  let ancho=img.width;
  console.log("height: "+alto, "width: "+ancho);
  const canvas = document.getElementById("imagen");
  console.log("height: "+canvas.height, "width: "+canvas.width);
  var ctx = canvas.getContext("2d");
  var imageData = ctx.getImageData(0,0,ancho,alto);
  var pixels = imageData.data;

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
  var xi = document.getElementById("xi").value; 
  var xf = document.getElementById("xf").value; 
  var yi = document.getElementById("yi").value; 
  var yf = document.getElementById("yf").value; 
  function draw(x0,y0,xf,yf){
    const canvas = document.getElementById("imagen");
    console.log("height: "+canvas.height, "width: "+canvas.width);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, x0, y0, xf-x0,yf-y0, 0, 0, canvas.width, canvas.height);
  }
  draw(xi,xf,yi,yf);
  function crearMatriz(x0,y0,xf,yf,result){
    let matriz=[];
    var h=0;
    let alto=img.height;
    let ancho=img.width;
    for (let k=y0; k < alto; k++) {
      let fila=[]
      for (let j=x0; j < ancho; j++) {
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
