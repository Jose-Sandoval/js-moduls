
const d  = document;
let x=0, y=0;

export function atajos(e) {     
     if(e.key === "a" && e.altKey)
          alert("has lanzado una alerta con el teclado");
     if (e.key === "c" && e.ctrlKey) 
          confirm("has lanzado una confirmacion con el teclado");
     if(e.key === "P" && e.shiftKey)
          prompt("has lanzado un aviso desde el teclado");          
}
     


export function pelota(e) {    
          //console.log(e.keyCode);
          const $pelota = d.querySelector(".pelota"), $stage = d.querySelector(".escena"),
               limitePelota = $pelota.getBoundingClientRect(), limiteStage = $stage.getBoundingClientRect();
               //console.log(limitePelota.left, limiteStage.left);
              // console.log(limitePelota, limiteStage);

          //console.log($pelota , $stage);
          
          switch (e.keyCode) {
               case 37:
                    //izquierda
                    if(limiteStage.left < limitePelota.left)
                         x--;
                    e.preventDefault();
                    break;
               case 38:
                    //arriba
                    if (limiteStage.top < limitePelota.top) 
                         y--;
                     e.preventDefault();
                    break;
               case 39:
                    //derecha
                     if (limiteStage.right > limitePelota.right) 
                         x++;
                    e.preventDefault();
                    break;
               case 40:
                    //abajo
                     if (limiteStage.bottom > limitePelota.bottom) 
                         y++;
                    e.preventDefault(); 
                    break;          
               default:
                    break;               
          }            
          $pelota.style.transform = `translate(${x*10}px , ${y*10}px)`;
}