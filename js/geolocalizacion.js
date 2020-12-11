const d=document, n = navigator;
export function geolocalizacion(id) {
     const $id = d.getElementById(id);

     const options = {
          enableHighAccuracy: true, //activar la presision
          timeout : 5000, //cuanto tiempo estara esperando para tomar la lectura
          maximumAge: 0, //para no guardar en cache las lecturas
     };

     const error = (err) =>{
          $id.innerHTML = `<p>Error: <mark>  ${err.code} ${err.message}</mark></p>`;
     }

     const succes = (position) =>{
          //console.log(position);
          let coords = position.coords;
          $id.innerHTML = `<p>Latitud: <b>${coords.latitude}</b> </p>
               <p>Longitud: <b>${coords.longitude}</b></p>
               <p>Precision: <b>${coords.accuracy}</b></p>
               <a href="https://www.google.com.mx/maps/@${coords.latitude},${coords.longitude},17z" rel="noopener"      target="_blank">ir a maps</a>`
     }

     n.geolocation.getCurrentPosition(succes, error, options);
}