const d= document;

export function smartVideo(params) {
     const $videos = d.querySelectorAll("video[data-smart-video]");
     //console.log($videos);   
     
     const cb =(entries) =>{
          //console.log(entries);
          entries.forEach(entry => {
               //console.log(entry);
               if(entry.isIntersecting)
                    entry.target.play();
               else
                    entry.target.pause();

               window.addEventListener("visibilitychange", (e) =>{
                    d.visibilityState === "visible"
                    ?entry.target.play()
                    :entry.target.pause()
              });
          });          
     }     

     const observer = new IntersectionObserver(cb, {
          threshold: 0.5,
     })

     $videos.forEach(el =>{
          observer.observe(el);
     })    
          
}