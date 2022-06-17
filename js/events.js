import { buttonPlay, buttonPause, buttonStop, buttonSetTime, buttonSoundOn, buttonSoundOff } from "./elements.js";

export function Events({ controls, timer, sound }) {
   buttonPlay.addEventListener("click", () => {
      controls.play();
      timer.countDown();
      sound.pressButton();
   });

   buttonPause.addEventListener("click", () => {
      controls.pause();
      timer.hold();
      sound.pressButton();
   });

   buttonStop.addEventListener("click", () => {
      controls.reset();
      timer.reset();
      sound.pressButton();
   });

   buttonSetTime.addEventListener("click", () => {
      sound.pressButton()
      const newMinutes = controls.getMinutes();
      if (newMinutes) {
         timer.update(newMinutes, 0);
         timer.updateMinutes(newMinutes);
      } else {
         timer.reset();
      }
   });

   buttonSoundOn.addEventListener("click", () => {
      controls.soundOn();
      sound.bgAudio.pause();
   });

   buttonSoundOff.addEventListener("click", () => {
      controls.soundOff();
      sound.bgAudio.play();
   });
}