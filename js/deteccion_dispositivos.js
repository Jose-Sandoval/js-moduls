const d= document,
n= navigator,
ua = n.userAgent;
export function userDiveceInfo(id) {
     const $id = d.getElementById(id),
     isMobile = {
          android : () => ua.match(/android/i),
          mac : () => ua.match(/iphone|ipad|ipod/i),
          windows : ()=> ua.match(/windows phone/i),
          any : function () {          
               return this.android() || this.mac() || this.windows();
          },
     },
     isDesktop = {
          windows : () => ua.match(/windows nt/i),
          mac : () => ua.match(/mac os/i),
          linux : () => ua.match(/linux/i),
          any : function () {
               return this.windows() || this.mac() || this.linux();
          }
     },
     isBrowser = {
          safari : () => ua.match(/safari/i),
          chrome : () => ua.match(/chrome/i),
          edge : () => ua.match(/edg/i),
          firefox : () => ua.match(/firefox/i),          
          opera : () => ua.match(/opera|opera mini/i),
          ie : () => ua.match(/msie|emobile/i),          
          any : function () {
               return this.edge() || this.firefox() || this.opera() || this.ie() || this.chrome() || this.safari();
          },
     };     
     //console.log($id);
     //console.log(ua);
     //console.log(isBrowser.any());
     //console.log(isMobile.android());
     //console.log(isMobile.any());

     $id.innerHTML =`
          <ul>
               <li>User agent : ${ua}</li>
               <li>Plataforma: ${isMobile.any()?isMobile.any():isDesktop.any()} </li>
               <li>Navegador : ${isBrowser.any()}</li>                              
          </ul>
     `;
     //**********Contenido exclusivo******* */
     if (isBrowser.chrome()) {
          $id.innerHTML +=`<p><mark>contenido exclisivo de chrome</mark></p>`          
     }

     if (isBrowser.firefox()) {
          $id.innerHTML +=`<p><mark>contenido exclisivo de firefox</mark></p>`          
     }

     if (isDesktop.windows()) {
          $id.innerHTML +=`<p><mark>descarga el software para windows</mark></p>`                              
     }
       if (isDesktop.linux()) {
          $id.innerHTML +=`<p><mark>descarga el software para linux</mark></p>`                              
     }
       if (isDesktop.mac()) {
          $id.innerHTML +=`<p><mark>descarga el software para mac OS</mark></p>`                              
     }

     //**********Redirecciones******** */

     if(isMobile.android()){       
          location.href = "https://www.google.com.mx/"
     }
     
}