import { buttonPlay, buttonStop, buttonIncreaseTime, buttonDecreaseTime, buttonWrapper } from "./elements.js";

export function Events({ controls, timer, sound }) {
   buttonPlay.addEventListener("click", () => {
      timer.countDown();
   });

   buttonStop.addEventListener("click", () => {
      timer.reset();
   });

   buttonIncreaseTime.addEventListener("click", () => {
      timer.increase();
   });

   buttonDecreaseTime.addEventListener("click", () => {
      timer.decrease();
   });

   buttonWrapper.forEach((element) => {
      element.addEventListener("click", () => {
         if (sound.bgAudio.paused) {
            controls.clicked(element.firstElementChild);
         } else {
            controls.cleanClick();
         }
         sound.play(element.firstElementChild);
      });
   });

   buttonWrapper.forEach((element) => {
      element.addEventListener("mouseover", () => {
         controls.mouseOver(element.firstElementChild);
      });
   });

   buttonWrapper.forEach((element) => {
      element.addEventListener("mouseout", () => {
         controls.mouseOut(element.firstElementChild);
      });
   });
}