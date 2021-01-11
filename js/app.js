/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game
const startButton = document.querySelector("#btn__reset");
const keyboardBtns = document.querySelector("#qwerty")
startButton.addEventListener("click",function() {
  game = new Game();
  const phrase = new Phrase(game.getRandomPhrase());
  game.startGame();
});
/*
 * Listner on keyboard letter press. 
 * found String.fromCharCode @ MDN
 * found Char codes @
 * https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
 */
document.addEventListener('keydown', function(e){
  if (e.keyCode >= 65 && e.keyCode <=90) {
    let letterPressed = String.fromCharCode(e.keyCode).toLowerCase();
    let keys = document.querySelectorAll('#qwerty button')
    for (let i = 0; i < keys.length; i++) {
      if (letterPressed === keys[i].innerHTML) {
        keys[i].click();
      }
    }
  }
});

/*
 * Listens for "click" that is simulated in 
 * above keypress listener or actual click on screen. 
*/
keyboardBtns.addEventListener('click', function(e){
  if (e.target.tagName == 'BUTTON') {
    game.handleInteraction(e.target); 
  }
  });


