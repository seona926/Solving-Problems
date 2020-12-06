import {carNames} from "./main.js";

export function findWinner(arr) {
    let winner = new Array();
    let eachLength = arr.map(x => x.length);
    console.log(eachLength);
    let maxNum = Math.max(...eachLength);
  
    for (let i = 0; i < eachLength.length; i++) {
      if (eachLength[i] === maxNum) {
        winner.push(carNames[i].name);
      }
    }
    console.log(winner);
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "최종 우승자: " + winner;
  }