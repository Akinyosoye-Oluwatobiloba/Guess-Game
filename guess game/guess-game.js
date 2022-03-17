const button = document.querySelector('#btn');
const input = document.querySelector('#userInput');
const outputText = document.querySelector('#outputtext')
let number = Math.floor(Math.random() * 100)




button.addEventListener('mouseover', function () {

   let input = document.getElementById('userInput').value;
   if (input == number) {
      outputText.textContent == `you guessed it right,your number was ${input}`;
   } else if (input < number) {
      outputText.textContent = "  You guessed it low, Guess again 🤣🤣🤣🤣"
   }

   if (input > number) {
      outputText.textContent = " You guessed too high, You missed it😂😂😂"
   }
});