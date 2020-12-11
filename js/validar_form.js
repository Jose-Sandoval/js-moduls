const d =document;

export function checkForm() {

     const $form = d.querySelector(".validar-form"),
          $inputs = d.querySelectorAll(".validar-form [required]");

     //console.log($inputs);     
     //console.log($form);

     $inputs.forEach( input =>{
          let $span = d.createElement("span");
          $span.id = input.name;
          $span.textContent = input.title;
          $span.classList.add("form-error", "none")
          input.insertAdjacentElement("afterend", $span)
     });

     d.addEventListener("submit", (e)=>{
          //console.log(e.target);
          if (e.target===$form) {        
               e.preventDefault(); 
               //console.log(e);
               $inputs.forEach(input =>{
                    let pattern = input.pattern || input.dataset.pattern;
                    //console.log(pattern, input.name);
                    if (pattern) {
                         let regExp = new RegExp(pattern);
                         console.log(!regExp.exec(input.value));
                         !regExp.exec(input.value)
                              ?d.getElementById(input.name).classList.add("is-active")
                              :d.getElementById(input.name).classList.remove("is-active")
                    }else{
                         //console.log("el input no tiene patron");
                    }
               }) ;
               const $loader = d.querySelector(".form-loader "),
                    $response = d.querySelector(".form-response");
               
               $loader.classList.remove("none");
               setTimeout(() => {
                    $loader.classList.add("none");                    
                    $response.classList.remove("none");
                    setTimeout(() => {
                         $response.classList.add("none");                         
                    }, 3000);
               }, 3000);               
          }
     });
     
}