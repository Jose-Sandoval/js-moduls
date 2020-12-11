const d = document;

export default function sorteo(player, btnSorteo) {
     const  $lista = d.querySelectorAll(player), $btnSorteo= d.getElementById(btnSorteo);
     d.addEventListener("click", (e)=>{          
          if(e.target === $btnSorteo){   
               let size = $lista.length;
               let ganador = Math.floor(Math.random()*size);
               console.log(ganador);
               console.log($lista[ganador].textContent);
               alert(`el ganador es ${$lista[ganador].textContent}`)
               //console.log($lista.length);            
          }
     })
}