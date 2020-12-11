const d = document, w = window;

export default function narrador() {
     const $select = d.getElementById("voces-narrador"),
          $btn = d.getElementById("btn-narrador"),
          $textarea = d.getElementById("texto-narrador"),
          speechMessage = new SpeechSynthesisUtterance ;

     //console.log($select, $btn, $textarea, speechMessage);
    let voices = [];

     w.speechSynthesis.addEventListener("voiceschanged", (e)=>{
          voices = speechSynthesis.getVoices();
          //console.log(voices);

          voices.forEach(voice =>{
               let $option = d.createElement("option");
               $option.value = voice.name;
               $option.textContent = voice.name +" -- "+ voice.lang;
               if(voice.default) {
                    $option.textContent += ' -- DEFAULT';
               }
               $select.appendChild($option)
          })
     });

     d.addEventListener("change", (e) =>{
          if (e.target === $select) {
               let voz;
               voices.forEach(voice => {
                     if(voice.name === e.target.value)  voz = voice;
               });
               speechMessage.voice = voz;
               //console.log(speechMessage);
          }
     })

     d.addEventListener("click", (e) =>{
          if (e.target === $btn) {
               speechMessage.text = $textarea.value;   
               w.speechSynthesis.speak(speechMessage)            
          }    
     })
    
    

   //function populateVoiceList() {
   //     voices =speechSynthesis.getVoices();
   //     console.log(speechSynthesis.getVoices());

   //     for(let i = 0; i < voices.length ; i++) {
   //     let option = document.createElement('option');
   //     option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
   //     
   //     if(voices[i].default) {
   //          option.textContent += ' -- DEFAULT';
   //     }

   //     option.setAttribute('data-lang', voices[i].lang);
   //     option.setAttribute('data-name', voices[i].name);
   //     voiceSelect.appendChild(option);
   //     }
   //}
     
}