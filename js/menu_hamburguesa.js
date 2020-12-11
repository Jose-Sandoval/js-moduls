export default function  hamburgerMenu(panelBtn, panel, menuLink) {
     const d= document;
     const $btnHam = d.querySelector(panelBtn);
     const $panel = d.querySelector(panel);

     d.addEventListener("click", (e) =>{
          //console.log(e.target);
          //el * es para decir que hacemos referencia a todos los elementos que estan dentro del elemento que tiene la clase panel-btn
          if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){               
               $btnHam.classList.toggle("is-active");               
               $panel.classList.toggle("is-active");
               //console.log($btnHam.className);
               //d.querySelector(panel).classList.toggle("is-active")           
          }

          if(e.target.matches(menuLink)){
               $btnHam.classList.remove("is-active");               
               $panel.classList.remove("is-active");
          }
     })
     
}