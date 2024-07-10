import { forward, showResultText } from "./main.js";
import { findWinner } from "./findwinner.js";
import { goForward } from "./goforward.js";

export function tryGameNTimes() {
  showResultText();
  document.getElementById("result").innerHTML = "";
  let numTry = document.getElementById("#racing-count-input").value;
  goForward(numTry);
  findWinner(forward);
}
