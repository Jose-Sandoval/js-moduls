export default function relojAlarma() {
     const d= document;
     let $reloj = d.getElementById("reloj"), tempoReloj =null, tempoAlarma = null,  $alarma = d.createElement("audio");


     d.addEventListener("click", (e) =>{
          if(e.target.matches("#inicia-reloj")) {               
               tempoReloj = setInterval(() => {
                    $reloj.textContent = new Date().toLocaleTimeString();
                    //console.log(new Date().toLocaleString());
               }, 1000);
               d.getElementById("inicia-reloj").setAttribute("disabled", "true");
               console.log("presionaste el boton inicia reloj");
          }
          
          if(e.target.matches("#deten-reloj")) {
               $reloj.textContent = null;
                clearInterval(tempoReloj);
                d.getElementById("inicia-reloj").removeAttribute("disabled");
               console.log("presionaste el boton deten reloj");
          }

          if(e.target.matches("#inicia-alarma")) {
               $alarma.setAttribute("src" , "assets/Alarma.mp3");
               tempoAlarma = setTimeout(() => {
                    $alarma.play();
               }, 1000);
               d.getElementById("inicia-alarma").disabled = true;
               console.log("presionaste el boton inicia alarma");
          }
          if(e.target.matches("#deten-alarma")) {
               clearTimeout(tempoAlarma);
               // los sig metodos son de la api de audio de javascript
               //detener el audio
               $alarma.pause();
               //para reiniciar el audio al inicio
               $alarma.currentTime = 0;
               d.getElementById("inicia-alarma").disabled = false;
               console.log("presionaste el boton deten alarma");
          }
     })     
}

