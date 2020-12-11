const d = document;
let $btnInicio = d.querySelector(".btn-inicio");

export function mostrarBtnInicio() {

      d.addEventListener("scroll", (e)=>{             
          if(window.scrollY>=500){
               
               $btnInicio.classList.remove("hidden");
          }else{
               $btnInicio.classList.add("hidden");
          }
     })     
}

export function irInicio() {
     
     d.addEventListener("click", (e)=>{
          if(e.target.matches(".btn-inicio")){
               //console.log("presionaste el boton de incio");
               window.scrollTo({
                    behavior: "smooth",
                    top: 0,
                    //left: 0,
               });
          }
     })
     
}