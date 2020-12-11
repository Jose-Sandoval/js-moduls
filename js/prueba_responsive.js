const d = document;
 
export default function responsiveTester(form){

     const $form = d.getElementById(form);

     let tester;

     d.addEventListener("submit", (e)=>{          
        if(e.target===$form){
            //console.log($form.url.value);
            //console.log($form.ancho.value);
            //console.log($form.alto.value);
             e.preventDefault();
             tester = window.open(
                  $form.url.value,
                  "tester",
                    `innerWidth=${$form.ancho.value},
                     innerHeight=${$form.alto.value}`);
        }
     });

     d.addEventListener("click", (e)=>{
          if(e.target ===$form.cerrar ) tester.close();
     });

}