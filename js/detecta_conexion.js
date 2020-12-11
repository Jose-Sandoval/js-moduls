const d= document,  n = navigator, w = window;

export function detectaConexion() {
     const $div = d.createElement("div");

     function addRemove() {
          d.body.insertAdjacentElement("beforeEnd",$div);  
          setTimeout(() => d.body.removeChild($div)    , 1000);
     }

     w.addEventListener("online", (e)=>{
          //console.log(n.onLine);
          $div.textContent = "En linea" ;
          $div.classList.add("on-line"); 
          $div.classList.remove("off-line");    
          addRemove();
     });

     w.addEventListener("offline", (e)=>{
          //console.log("fuera de linea");
          $div.textContent = "Fuera de linea";
          $div.classList.add("off-line")
          $div.classList.remove("on-line");     
          addRemove();             
     });        
}