const d= document, ls=localStorage;
let $btnOscuro = d.getElementById("btn-oscuro"),
     //asi obtenemos todos los elementos que contienen algun atributo espcifico para signar la clase oscuro
     $listElemDark = d.querySelectorAll("[data-dark]");

export function modoOscuro() {

     const darkMode = () =>{
          $btnOscuro.textContent = "☀️";
          $listElemDark.forEach(el => el.classList.add("oscuro")); 
          ls.setItem("tema", "dark");
     }

     const lightMode = () =>{
          $btnOscuro.textContent = "🌕";               
          $listElemDark.forEach(el => el.classList.remove("oscuro"));   
          ls.setItem("tema", "light");
     }

     d.addEventListener("click" , (e)=>{          
          if(e.target.matches(".btn-modo-oscuro")){
               if($btnOscuro.textContent === "🌕"){
                    darkMode();
               }else{                    
                   lightMode();
                }       
                //$listElemDark.forEach(el => el.classList.toggle("oscuro")); 
          }
     })

     if(ls.getItem("tema")===null) ls.setItem("tema", "light")
     if(ls.getItem("tema")==="light") lightMode();
     if(ls.getItem("tema")==="dark") darkMode();
     
}