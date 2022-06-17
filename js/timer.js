export function Timer({ minutesDisplay, secondsDisplay, controls }) {

   let timeOut;
   let minutes = Number(minutesDisplay.textContent);

   function update(minutes, seconds) {
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
      secondsDisplay.textContent = String(seconds).padStart(2, "0");
   }

   function updateMinutes(newMinutes) {
      minutes = newMinutes;
   }

   function hold() {
      clearTimeout(timeOut);
   }

   function reset() {
      update(minutes, 0);
      clearTimeout(timeOut);
   }

   function countDown() {
      timeOut = setTimeout(() => {
         let minutes = Number(minutesDisplay.textContent);
         let seconds = Number(secondsDisplay.textContent);

         if (minutes <= 0 && seconds <= 0) {
            controls.reset();
            return;
         }

         if (seconds <= 0) {
            seconds = 59;
            minutes--;
         } else {
            seconds--;
         }

         update(minutes, seconds);
         countDown();
      }, 50);
   }

   return { update, reset, countDown, hold, updateMinutes }
}