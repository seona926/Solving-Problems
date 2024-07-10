class Car {
    constructor(name) {
      this.name = name;
    }
    getRandomNumber() {
      return Math.floor(Math.random() * 10);
    }
  }
  
let carNames;

function separateCarNames() {
  carNames = document.getElementById("#car-names-input").value;
  carNames = carNames.split(',');
  console.log(carNames);

  for (let i = 0; i < carNames.length; i++) {
    carNames[i] = new Car(carNames[i]);
    // console.log(carNames[i]);
  }
  isUnderFiveCharacters();
  // hasBlankName()
  hasBlanks();
  // hasOtherChracters()
  if ((isUnderFiveCharacters() === true) && (hasBlanks() === false)) {
    showNumTry();
  }
  
}

function isUnderFiveCharacters() {
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

function hasBlanks() {
  for (let i = 0; i < carNames.length; i++) {
    // console.log(carNames[i]);
    if (carNames[i].name == null || carNames[i].name.replace(/ /g,"") === "") {
      alert('공백은 입력하실 수 없습니다.');
      document.getElementById("#car-names-input").value = "";
      // document.getElementById("#car-names-input").focus();
      return true;
    }
  }

  return false;
}


// function hasBlanks() {
//   for (let i = 0; i < carNames.length; i++) {
//     if (carNames[i].search(/\s/) != -1) {  //search 함수 에러발생
//       return true;
//     } else {
//       return false;
//     }
//   }
// }



// function hasOtherChracters() {
//   let count = 0;
//   for (let i = 0; i < carNames.length; i++) {
//     if (carNames[i].search(/[0-9]|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힝|,]/) == -1) {
//       count = count + 1;
//       break;
//     }
//   }
//   if (count != 0) {
//     alert("숫자, 영문, 쉼표만 입력해주세요")
//     document.getElementById("#car-names-input").value = "";
//     document.getElementById("#car-names-input").focus();
//     return true;
//   }
//   return false;
// }




// make cars go forward or stop and print it
let forward = new Array();
function goForward(numTry) {
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

// make the game try n time(s)
function tryGameNTimes() {
  // resultHandler()
  showResultText()
  document.getElementById("result").innerHTML = '';
  let numTry = document.getElementById("#racing-count-input").value;
  goForward(numTry); 
  findWinner(forward);
}

let firstButton = document.getElementById("#car-names-submit");
let secondButton = document.getElementById("#racing-count-submit");

firstButton.addEventListener('click', separateCarNames);
secondButton.addEventListener('click', tryGameNTimes);

function showNumTry() {
  document.getElementById("numTry").style.display = 'block';
}

function showResultText() {
  document.getElementById("resultText").style.display = 'block';
}

// function showRestartBtn() {
//   document.getElementById("restartbtn").style.display = 'block';
// }
// function refreshPage() {
//   window.location.reload();
// }

function findWinner(arr) {
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
  // showRestartBtn();
}




// // show numTry template
// function numTryHandler() {
//   let t = document.querySelector('#numTryTemplate');
//   let clonet = document.importNode(t.content, true);
//   document.getElementById('numTry').appendChild(clonet);
// }

// //show result Template
// function resultHandler() {
//   let s = document.querySelector('#resultTemplate');
//   let clones = document.importNode(s.content, true);
//   document.getElementById('result').appendChild(clones);
// }