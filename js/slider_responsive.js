const d = document;
const $btnSliderPrev = d.getElementById("prev"), $btnSliderNext = d.getElementById("next"),
     $sliders = d.querySelectorAll(".slide");
     
export function slider() {
     let i =0;
     d.addEventListener("click", (e)=>{          
          if (e.target ===$btnSliderNext || e.target === $btnSliderPrev) e.preventDefault();

          if (e.target===$btnSliderNext) {
               $sliders[i].classList.remove("active")
               i++
               if (i>=$sliders.length) i=0;
               $sliders[i].classList.add("active")
          }

           if (e.target===$btnSliderPrev) {
               $sliders[i].classList.remove("active")
               i--;
               if (i<0) i=$sliders.length-1;
               $sliders[i].classList.add("active")
          }
     })
}