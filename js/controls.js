export function Controls({ buttonPlay, buttonPause, buttonStop, buttonSetTime, buttonSoundOn, buttonSoundOff }) {
   function play() {
      buttonPlay.classList.add("hide");
      buttonPause.classList.remove("hide");
      buttonStop.classList.remove("hide");
      buttonSetTime.classList.add("hide");
   }

   function pause() {
      buttonPlay.classList.remove("hide");
      buttonPause.classList.add("hide");
   }

   function getMinutes() {
      const newMinutes = prompt("Com quantos minutos o timer deve começar?") || 0;
      if (Number.isInteger(Number(newMinutes)) && (Number(newMinutes) > 0)) {
         return newMinutes;
      } else {
         return false;
      }
   }

   function reset() {
      buttonPlay.classList.remove("hide");
      buttonPause.classList.add("hide");
      buttonStop.classList.add("hide");
      buttonSetTime.classList.remove("hide");
   }

   function soundOn() {
      buttonSoundOn.classList.add("hide");
      buttonSoundOff.classList.remove("hide");
   }

   function soundOff() {
      buttonSoundOn.classList.remove("hide");
      buttonSoundOff.classList.add("hide");
   }

   return { play, pause, reset, getMinutes, soundOn, soundOff };
}