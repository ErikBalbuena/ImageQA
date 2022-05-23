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
