// const guessNumber=50;
// let guessbtn= document.querySelector(".guess-btn");
// let progressBar = document.querySelector("#progress");
// let numberInput=document.querySelector(".number-input");
// let guessestext=document.querySelector(".guesses");
// let start=document.querySelector(".main-btn");


// let checkNumber=function() {
//  let num = numberInput.value;
//  progress = progressBar.value;
//  if(num>guessNumber){
//   guessestext.innerHTml = "the value is very high";
//   progressBar.value=progressBar.value+25;

//  }else if(num <guessNumber && num!=0){
//   guessestext.innerHTML="the value is too small";
//   progressBar.value=progressBar.value+25;
//  } else{
//   guessestext.innerHTML="great work <3";
//  }

// };

// guessbtn.addEventListener("click",checkNumber);

// let startNewGame=function () {
//   progressBar.value=0;
//   numberInput.value=0;  

// };

// start.addEventListener("click",startNewGame);




const guessNumber = 50;
let progressBar = document.querySelector("#progressBar");
let guessBtn = document.querySelector(".guess-btn");
let numberInput = document.querySelector(".number-input");
let guesses = document.querySelector(".guesses");
let start = document.querySelector(".main-btn");
let game = document.querySelector(".main-header");

let checkNumber = function () {
  let num = numberInput.value;
  progress = progressBar.value;
  if (num > guessNumber) {
    progressBar.value = progressBar.value + 25;
    guesses.innerHTML = "The value is very high!";
  }
  if (progressBar.value == 100) {
    numberInput.setAttribute("disabled", "disabled");
    guessBtn.setAttribute("disabled", "disabled");
    game.innerHTML = "Game over!";
  } else if (num < guessNumber) {
    guesses.innerHTML = "The value is too small!";
    progressBar.value = progressBar.value + 25;
  } else {
    progressBar.value = 100;
    alert("You Win!");
  }
};

guessBtn.addEventListener("click", checkNumber);

let startNewGame = function () {
  progressBar.value = 0;
  numberInput.value = 0;
  numberInput.removeAttribute("disabled", "disabled");
  guessBtn.removeAttribute("disabled", "disabled");
};

start.addEventListener("click", startNewGame);












