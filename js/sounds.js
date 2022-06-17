export default function () {

   let bgAudio = new Audio();
   bgAudio.loop = true;

   function play(button) {
      const buttonClass = button.classList.value || 0;
      switch (buttonClass) {
         case "forest": {
            setMedia("../media/floresta.wav");
            break;
         }
         case "rain": {
            setMedia("../media/chuva.wav");
            break;
         }
         case "coffeeShop": {
            setMedia("../media/cafeteria.wav");
            break;
         }
         case "fireplace": {
            setMedia("../media/lareira.wav");
            break;
         }
         default: {
            bgAudio.pause();
         }
      }
   }

   function stop() {
      bgAudio.pause();
   }

   function setMedia(src) {
      if (bgAudio.src == src) {
         stop();
      } else {
         bgAudio.src = src;
         bgAudio.play();
      }
   }

   return { bgAudio, play, stop };
}