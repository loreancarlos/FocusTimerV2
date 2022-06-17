export function Controls({ buttonPlay, buttonStop, buttonWrapper }) {
   function play() {
      buttonPlay.setAttribute("disabled", "disabled");
      buttonStop.removeAttribute("disabled", "disabled");
   }

   function stop() {
      buttonPlay.removeAttribute("disabled", "disabled");
      buttonStop.setAttribute("disabled", "disabled");
   }

   function mouseOver(button) {
      button.style.transform = "scale(1.1)";
   }

   function mouseOut(button) {
      button.style.transform = "scale(1.0)";
   }

   function clicked(button) {
      cleanClick();
      button.style.backgroundColor = "#02799D";
      button.firstElementChild.firstElementChild.style.fill = "white";
   }

   function cleanClick() {
      buttonWrapper.forEach((button) => {
         button.firstElementChild.style.backgroundColor = "#E1E1E6";
         button.firstElementChild.firstElementChild.firstElementChild.style.fill = "#323238";
      });
   }

   return { play, stop, mouseOver, mouseOut, clicked, cleanClick };
}