// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score");

var scoreboard = document.getElementById("score-board");

var playAgaininButton = document.getElementById("play-again-button");

scoreboard.innerHTML = score;

playAgaininButton,onclick = () => {
    location.href = "./game.html";
};