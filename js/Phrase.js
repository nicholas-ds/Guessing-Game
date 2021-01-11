/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 
 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.phrase.toLowerCase();
   }
/**
* Display phrase on game board
*/
   addPhraseToDisplay() {
     const ul = document.querySelector('#phrase ul');
     const hiddenPhrase = this.phrase;
     let str = "";
     
     for (let i = 0; i < hiddenPhrase.length; i++) {
       if (hiddenPhrase.charAt(i) === " ") {
        str += `<li class="space"> </li>`
      } else {
        str +=`<li class= "hide letter ${hiddenPhrase.charAt(i)}">${hiddenPhrase.charAt(i)}</li>`;
      }
     }
     ul.innerHTML = str;
   }
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
   checkLetter(letter) {
     for (let i = 0; i < game.activePhrase.phrase.length; i++) {
       if (game.activePhrase.phrase[i] === letter) {
         return true;
       } 
      }
      return false;
     }
 /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
     showMatchedLetter(letter) {
        let letters = document.querySelectorAll('#phrase ul li')
        for (let i = 0; i < letters.length; i++) {
          if (letters[i].innerHTML === letter) {
            letters[i].className = `show letter ${letter}`;
          }
        }
      }
  }                