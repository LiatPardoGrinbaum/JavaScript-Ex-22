const message = document.querySelector(".message");
const letters = document.querySelector(".letters");
const isRightLetter = document.querySelector(".isRightLetter");
const h3 = document.querySelector("h3");
const container = document.querySelector(".container");

function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//generate random letter lower or uppercase
function generateRandomLetter() {
  let result = "";
  result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
}
message.style.color = "black";
message.innerText = "Guess a letter";

//I made it insensitive case letters, doesn't matter lower\uppercase - it's the same letter.
let random = generateRandomLetter().toLowerCase();
console.log(random);
const lettersArr = [];
window.addEventListener("keypress", (e) => {
  let strLetters = "";
  let char = e.key.toLowerCase();
  let isValid = isLetter(char);
  if (isValid) {
    if (lettersArr.indexOf(char) === -1) {
      if (random !== char) {
        lettersArr.push(char);
        console.log(lettersArr);
        strLetters = lettersArr.join(",");
        message.innerText = "nope, wrong letter";
        message.style.color = "red";
        letters.innerText = strLetters;
        console.log(strLetters);
      } else {
        message.style.color = "green";
        message.innerText = "right letter!";
        isRightLetter.innerText = char;
        h3.innerText = "Would you like to play again?";
        letters.style.display = "none";
        const button = document.createElement("button");
        container.appendChild(button);
        const a = document.createElement("a");
        button.appendChild(a);
        button.innerText = "Yes";
        button.addEventListener("click", function () {
          window.location.reload();
        });
      }
    } else {
      message.style.color = "red";
      message.innerText = `${char} has already been guessed!`;
    }
  } else {
    message.style.color = "red";
    message.innerText = "please enter a valid letter";
  }
});
