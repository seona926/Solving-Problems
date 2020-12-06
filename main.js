import {separateCarNames} from "./separateCarNames.js";
import {tryGameNTimes} from "./tryGameNTimes.js";

export class Car {
    constructor(name) {
      this.name = name;
    }
    getRandomNumber() {
      return Math.floor(Math.random() * 10);
    }
  }
  
export let carNames;
export let forward = new Array();

let firstButton = document.getElementById("#car-names-submit");
let secondButton = document.getElementById("#racing-count-submit");

firstButton.addEventListener('click', separateCarNames);
secondButton.addEventListener('click', tryGameNTimes);

export function showNumTry() {
  document.getElementById("numTry").style.display = 'block';
}

export function showResultText() {
  document.getElementById("resultText").style.display = 'block';
}

