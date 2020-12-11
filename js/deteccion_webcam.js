const d= document, n = navigator;
export default function webCam(id) {
     const $video = d.getElementById(id);
     if(n.mediaDevices.getUserMedia){//preguntamos si el navegador puede utilizar esta funcion
          n.mediaDevices.getUserMedia({video:true, audio: true})  // la funcion gerUserMedia es una promesa
          .then((stream) => { //el metodo getUserMedia regresa un objeto con todos los datos de la imagen capturada y la guardamos en la variable stream
               //console.log(stream);
               $video.srcObject = stream; // a la eqtiquera video le asignamos un stributo especial srcObjet para que reciba los datos de la variable stream
               $video.play(); // para que no solo tome una foto ejecutamo el metodo play del api de media
          })
          .catch((err)=>{
               $video.insertAdjacentHTML("beforebegin", `<p>Sucedio el siguiente error: <mark>${err}</mark></p>`);   
          })
     }
     
}