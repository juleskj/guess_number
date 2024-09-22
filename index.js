import { $, $$ } from "../utils/dom.js";
import { getRandomNumber } from "../utils/numbers.js";

let max = 100;
let rand = getRandomNumber(max);

$("button").addEventListener("click", guessNumber);

function guessNumber() {
  const inputNumber = document.getElementById("guessBox").value;
  // her henter jeg valuen fra inputfæltet from en stirng og
  //den bliver lavet om til et nummer
  const number = parseFloat(inputNumber);

  if (number === rand) {
    $(".result").textContent = "Yay you have guessed the number!";
    $("body").classList.add("linear");
  } else if (number < rand) {
    $(".result").textContent = "higer!";
  } else {
    $(".result").textContent = "Lower!";
  }

  console.log(number);
}
