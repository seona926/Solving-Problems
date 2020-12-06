import {carNames, forward} from "./main.js";

export function goForward(numTry) {
    for (let i = 0; i < carNames.length; i++){
      forward[i] = '';
    }
    for (let i = 0; i < numTry; i++) {
      for (let j = 0; j < carNames.length; j++){
        let eachRace = document.getElementById("result");     
        if(carNames[j].getRandomNumber() > 3) {
          forward[j] += '-';
        } 
        eachRace.innerHTML = eachRace.innerHTML + carNames[j].name + ": " + forward[j] + "<br />";
      }
      document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<br />";
    } 
  }