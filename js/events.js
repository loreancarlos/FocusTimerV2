import { buttonPlay, buttonStop, buttonIncreaseTime, buttonDecreaseTime, buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace } from "./elements.js";

export function Events({ controls, timer, sound }) {
   buttonPlay.addEventListener("click", () => {
      timer.countDown();
   });

   buttonStop.addEventListener("click", () => {
      timer.reset();
   });

   buttonIncreaseTime.addEventListener("click", () => {
      timer.increaseTime();
   });

   buttonDecreaseTime.addEventListener("click", () => {
      timer.decreaseTime();
   });

   buttonSoundForest.addEventListener("mouseenter", () => {
      controls.mouseIn(buttonSoundForest);
   });

   buttonSoundForest.addEventListener("mouseout", () => {
      controls.mouseOut(buttonSoundForest);
   });

   buttonSoundForest.addEventListener("click", () => {
      controls.soundPlay();
      sound.bgAudio.pause();
   });

   buttonSoundRain.addEventListener("click", () => {
      controls.soundOff();
      sound.bgAudio.play();
   });

   buttonSoundCoffeeShop.addEventListener("click", () => {

   });

   buttonSoundFireplace.addEventListener("click", () => {

   });
}