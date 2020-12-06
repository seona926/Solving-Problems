import {Car, showNumTry} from "./main.js";
import {hasBlanks, isUnderFiveCharacters} from "./validation.js";

export let carNames = document.getElementById("#car-names-input").value;
console.log(carNames);
export function separateCarNames() {
    carNames = carNames.split(',');
    for (let i = 0; i < carNames.length; i++) {
      carNames[i] = new Car(carNames[i]);
    }
    isUnderFiveCharacters();
    hasBlanks();
    if ((isUnderFiveCharacters() === true) && (hasBlanks() === false)) {
      showNumTry();
    }
    
  }