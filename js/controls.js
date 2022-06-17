export function Controls({ buttonSoundForest, buttonSoundRain, buttonSoundCoffeeShop, buttonSoundFireplace }) {
   function mouseIn(button) {
      button.style.backgroundColor = "#02799D";
   }

   function mouseOut(button) {
      button.style.backgroundColor = "#E1E1E6";
   }

   return { mouseIn,mouseOut };
}