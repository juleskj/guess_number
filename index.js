let max = 100;
let rand = Math.round(Math.random() * 100);
// const button = document.querySelector("#submitButton");
// console.log(rand);
function guessNumber() {
  const inputNumber = document.getElementById("guessBox").value;
  // her henter jeg valuen fra inputfæltet from en stirng og
  //den bliver lavet om til et nummer
  const number = parseFloat(inputNumber);

  if (number == rand) {
    document.getElementById("result").textContent =
      "Yay you have guessed the number!";
    document.querySelector("body").classList.add("linear");
  } else if (number < rand) {
    document.getElementById("result").textContent = "higer!";
  } else if (number > rand) {
    document.getElementById("result").textContent = "Lower!";
  }

  console.log(number);
}
