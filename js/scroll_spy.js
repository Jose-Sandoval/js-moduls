const d = document, w = window;

export function scrollSpy() {
     const  $secciones = d.querySelectorAll(".section");

     const cb = (entries) =>{
          //console.log(entries);
          entries.forEach(entry =>{
               //console.log(entry);
               const id = entry.target.id,
                    $href = d.querySelector(`a[href="#${id}"]`);
                    //console.log($href);
                    //console.log(entry.target.id);   
               if (entry.isIntersecting) {
                    $href.classList.add("active")              
               }else{
                    $href.classList.remove("active")
               }
          })
     }
     const observer  = new IntersectionObserver(cb, {
          //root
          //rootMargin: "-250px",
          //este parametro es para indicar que hasta que el objeto observado no tenga 50% de su visivilidad no cambiara el foco y lo lo pasamos como un arreglo indica que estara entre esas dos proporsiones
          //threshold: 0.5,
          threshold: [0.5, 0.75]
     })
     
     $secciones.forEach(el => {
          observer.observe(el)
     })
     
}