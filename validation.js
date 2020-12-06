import {carNames} from "./separateCarNames.js"

export function isUnderFiveCharacters() {
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].name.length > 5) {
        alert("다섯글자 이하의 이름을 입력해주세요.");
        document.getElementById("#car-names-input").value = "";
        // document.getElementById("#car-names-input").focus();
        return false;
      }
    }
  
    return true;
  }
  
  export function hasBlanks() {
    for (let i = 0; i < carNames.length; i++) {
      console.log(carNames[i]);
      if (carNames[i].name == null || carNames[i].name.replace(/ /g,"") === "") {
        alert('공백은 입력하실 수 없습니다.');
        document.getElementById("#car-names-input").value = "";
        // document.getElementById("#car-names-input").focus();
        return true;
      }
    }
  
    return false;
  }