let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Very High,Try Again";
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Very low,Try Again";
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "congratulation,you got it right";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "please Provide valid input";
        gameResult.style.backgroundColor = "red"
    }

}