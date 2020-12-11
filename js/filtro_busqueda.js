const d= document;

export function filtroBusqueda(clase, id){
     const $cards = d.querySelectorAll(clase), $input = d.getElementById(id), $secCards = d.querySelector(".cards");

     /*d.addEventListener("input", (e)=>{
          console.clear();
          // console.log($input.buscar.value);
         // console.log(e);
          if(e.target === $input){               
               let $palabra = $input.value, expReg = new RegExp($palabra, "gi");

               $cards.forEach(el => {
                     const $figcaption =el.querySelector("figcaption").textContent;                    
                     console.log($figcaption, $palabra);
                     console.log($figcaption.match(expReg));
                    //console.log(el);
                    //console.log( expReg.test($figcaption)); 
                    if($figcaption.match(expReg)===null){
                         $secCards.insertAdjacentElement("beforeend", el)
                        // $secCards.removeChild(el );
                         el.classList.add("oculta");
                         //el.setAttribute("visibility" , "hidden");
                    }else{
                         el.classList.remove("oculta");
                    }
                    console.log( );
               });
          }
     });*/

     d.addEventListener("keyup", (e)=>{
          if(e.target===$input){ 
               //console.log(e.key);
               if (e.key === "Escape") e.target.value = "" ; 
               //console.log(e.target.value);
               $cards.forEach(el=>{
                   //console.log(el.textContent);
                    el.textContent.toLowerCase().includes(e.target.value)
                         ?el.classList.remove("filtra")
                         :el.classList.add("filtra");
               })
          }
     })
}