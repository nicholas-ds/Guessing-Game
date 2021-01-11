/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 
 /*
  *Creates random number 
  *@param number - highest random number function will go up to.
 */
 function randNum (max) {
   return Math.floor(Math.random() * Math.floor(max))
 }
 
 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
   createPhrases(){
     const phrases = [
      {phrase:'Its a trap'},
      {phrase:'May the force be with you'},
      {phrase:'Mischief Managed'},
      {phrase:'The dude abides'},
      {phrase:'Show me the money'}
    ];
      return phrases;
   }
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
* Uses random number function with the paramter as 
* the length of the createPhrases array.
*/
   getRandomPhrase() {
     let randPhrase = randNum(this.createPhrases().length);
     return this.phrases[randPhrase];
   }
/**
* Begins game by selecting a random phrase and displaying it to user
*/
   startGame() {
     const screenOverlay = document.querySelector('#overlay');
     screenOverlay.style.display = 'none';
     this.activePhrase = new Phrase(this.getRandomPhrase()); 
     this.activePhrase.addPhraseToDisplay();
   }
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
   handleInteraction(letter) {
     if (this.activePhrase.checkLetter(letter.innerHTML) === false) {
       this.removeLife();
       letter.className = 'wrong';
       letter.disabled = 'true';
       this.checkForWin();
     } else if (this.activePhrase.checkLetter(letter.innerHTML) === true) {
       letter.className = 'chosen';
       this.activePhrase.showMatchedLetter(letter.innerHTML);
       letter.disabled = 'true';
       this.checkForWin();
     }
   }
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
   checkForWin() {
     let gameWon
      const hiddenLetters = document.getElementsByClassName('hide');
        if (this.missed === 5) {
          gameWon = false;
          this.gameOver(gameWon);
          return false;
        } else if (hiddenLetters.length === 0) {
          gameWon = true;
          this.gameOver(gameWon);
          return true;
        }
    }
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
      if (gameWon === false) {
        let correctPhrase = document.createElement('H1')
        const screenOverlay = document.querySelector('#overlay');
        const loseMessage = document.querySelector('#overlay h1');
        correctPhrase.innerHTML = `The correct phrase was: "${this.activePhrase.phrase}"`;
        screenOverlay.style.display = 'flex';
        screenOverlay.className = 'lose';
        loseMessage.innerHTML = 'You lost, better luck next time!'
        loseMessage.appendChild(correctPhrase);
        this.resetGame();
      } else if (gameWon === true) {
        const screenOverlay = document.querySelector('#overlay');
        const winMessage = document.querySelector('#overlay h1');
        screenOverlay.style.display = 'flex';
        screenOverlay.className = 'win';
        winMessage.innerHTML = 'You Won!'
        this.resetGame();
      }
    }
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
   removeLife() {
     this.missed += 1;
     const hearts = document.querySelectorAll('#scoreboard ol li img');
     for (let i = 0; i < hearts.length; i++) {
       if (hearts[i].getAttribute('src') === 'images/Heart.png') {
         hearts[i].src='images/emptyheart.png';
         break;
       }
     }
   }
   /*
   Resets the game between wins or losses.
    -Keyboard set back to original
    -hearts restored
    -phrase removed 
    -keys re-enabled
   */
  resetGame() {
  const ul = document.querySelector('#phrase ul');
  const keys = document.querySelectorAll('#qwerty button')
  const keyboardBtns = document.querySelectorAll("#qwerty button");
  const hearts = document.querySelectorAll('#scoreboard ol li img');
  
  for (let i = 0; i < keyboardBtns.length; i++) {
    keyboardBtns[i].className = 'key'
      }
  for (let i = 0; i < hearts.length; i++) {
    if (hearts[i].getAttribute('src') === 'images/emptyheart.png') {
      hearts[i].src='images/Heart.png';
        }
      }
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
      }
      for (let i = 0; i < keys.length; i++) {
        keys[i].disabled = false;
      }
  }
}
 
 