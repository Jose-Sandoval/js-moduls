const  d= document, w = window;

export default function  responsiveMedia(id, mq,mobileContent, descktopContent) {
     let breakPoint = w.matchMedia(mq);


     const responsive = (e) =>{
          if(e.matches){
               d.getElementById(id).innerHTML = descktopContent;
          }else{
               d.getElementById(id).innerHTML = mobileContent;
          }
          //console.log(e.matches);
     };

     breakPoint.addListener(responsive);
     responsive(breakPoint);
}