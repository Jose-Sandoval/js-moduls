export function cuentaRegresiva(fecha) {
     const d = document;

     let $cuentaRegresiva = d.getElementById("cuenta-regresiva"),
          fechaRegresiva = fecha.getTime();

     let countDownTempo = setInterval(() => {
          fechaRegresiva = fecha - new Date().getTime();
          let dias=Math.floor(fechaRegresiva/86400000) ,
               horas = Math.floor((fechaRegresiva % 86400000)/3600000),
               minutos = Math.floor((fechaRegresiva % 3600000) /60000),
               segundos = Math.floor((fechaRegresiva % 60000) /1000);
          $cuentaRegresiva.textContent = `${dias} : ${horas} : ${minutos} : ${segundos}`;
          if(fechaRegresiva < 0){
          clearTimeout(countDownTempo);
          $cuentaRegresiva.textContent = "Felicidades el dia a llegado"
     }
          
     }, 1000);

     


     
}