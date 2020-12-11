import { irInicio, mostrarBtnInicio } from "./boton_inicio.js";
import { cuentaRegresiva } from "./cuenta_regresiva.js";
import { userDiveceInfo } from "./deteccion_dispositivos.js";
import { atajos, pelota } from "./eventos_teclado.js";
import { modoOscuro } from "./modo_osuro.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import relojAlarma from "./reloj_alarma.js";
import { detectaConexion } from "./detecta_conexion.js";
import webCam from "./deteccion_webcam.js";
import { geolocalizacion } from "./geolocalizacion.js";
import { filtroBusqueda } from "./filtro_busqueda.js";
import sorteo from "./sorteo_ganador.js";
import { slider } from "./slider_responsive.js";
import { scrollSpy } from "./scroll_spy.js";
import { smartVideo } from "./video_inteligente.js";
import { checkForm } from "./validar_form.js";
import narrador from "./narrador.js";


const d= document;

d.addEventListener("DOMContentLoaded", e=>{
     hamburgerMenu(".panel-btn", ".panel", ".menu a");
     relojAlarma();
     cuentaRegresiva(new Date("december 31, 2020 21:53:00 "));
     mostrarBtnInicio();
     irInicio();
     modoOscuro();
     responsiveMedia("youtube", "(min-width: 1024px)",
           `<a href="https://www.youtube.com/watch?v=ExsGyZDBlJQ">youtube</a>`, 
           `<iframe width="560" height="315" src="https://www.youtube.com/embed/ExsGyZDBlJQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

     responsiveMedia("gmaps", "(min-width: 1024px)",
     `<a href="https://goo.gl/maps/wRAR3vqSPvKmfcWp7">google maps</a>`, 
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565533!2d-99.16869369204348!3d19.427023126223464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1607719916372!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);

     responsiveTester("responsive-tester");
     userDiveceInfo("user-device");
     detectaConexion();
     webCam("webcam");
     geolocalizacion("geolocation");
     filtroBusqueda(".card", "buscar")
     sorteo("#player", "ganador");
     slider();
     scrollSpy();
     smartVideo();
     checkForm();
     narrador();
});

d.addEventListener("keydown", (e)=>{
     atajos(e);
     pelota(e);
})



