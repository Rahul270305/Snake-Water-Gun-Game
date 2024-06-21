var choice = ["Snake", "Water", "Gun"];
var player = document.getElementById("user");
var computer = document.getElementById("computer");
var result = document.getElementById("result");

function playgame(playerchoice) {
    var computerchoice = choice[Math.floor(Math.random() * choice.length)];
    var resultText = "";

    if (computerchoice === playerchoice) {
        resultText = "It's a tie!🤝";
    } else {
        switch (playerchoice) {
            case "Snake":
                resultText = (computerchoice === "Gun") ? "Computer wins!😁" : "You win!🥳";
                break;
            case "Water":
                resultText = (computerchoice === "Snake") ? "Computer wins!😁" : "You win!🥳";
                break;
            case "Gun":
                resultText = (computerchoice === "Water") ? "Computer wins!😁" : "You win!🥳";
                break;
        }
    }

    player.textContent = "Player's choice: " + playerchoice;
    computer.textContent = "Computer's choice: " + computerchoice;
    result.textContent = resultText;
}
