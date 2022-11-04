let computerPlay = "";
let result = "";
let playerPoints = 0;
let computerPoints = 0;
let playerOutput = document.getElementById("playerPoint");
let computerOutput = document.getElementById("ComputerPoint");
let playedRounds = "0";
let rounds = "0";
let played = document.getElementById("played");
let toplay = document.getElementById("toplay");
let finalResultOutput = document.getElementById("finalResult");
finalResultOutput.innerHTML = "Let's Play";
let PlayAgainButton = document.getElementById("PlayAgain");
let rockStyle = document.getElementById("Rock");
let paperStyle = document.getElementById("Paper");
let scissorsStyle = document.getElementById("Scissors");
let buttons = Array.from(document.querySelectorAll("button"));
let roundChoose = document.getElementById("roundChoose");
let roundCounter = document.getElementById("roundCounter");

console.log(buttons);

function computer() {
    let mathing = Math.floor((Math.random() * 12) * 1);
    console.log(mathing);
    switch (mathing) {
        case 1:
        case 2:
        case 3:
        case 4: computerPlay = "computerRock";
            break;
        case 5:
        case 6:
        case 7:
        case 8: computerPlay = "computerPaper";
            break;
        case 9:
        case 10:
        case 11:
        case 12: computerPlay = "computerScissors";
            break;
    }
    console.log(computerPlay);
}

function play(value, event) {
    event.preventDefault();
    if (rounds == "0") {
        alert("bitte wähle eine rundenanzahl");
        return;
    }
    if (rounds == playedRounds) {
        alert("Bitte starte ein Neues Spiel");
        return;
    }
    buttons.forEach((button) => {
        button.classList.remove("lose");
        button.classList.remove("winning");
        button.classList.remove("draw");
    });
    computer();
    playedRounds++;
    switch (value) {
        case "playerRock": playerPlay = "playerRock";
            break;
        case "playerPaper": playerPlay = "playerPaper";
            break;
        case "playerScissors": playerPlay = "playerScissors";
    }
    roundChoose.style.display = "none";
    roundCounter.style.display = "inline";

    if (playerPlay == "playerRock" && computerPlay == "computerRock") {
        littleResult = "Rock vs Rock = Unentschieden!";
        // rockStyle.style.border = "3px solid orange";
        rockStyle.classList.add("draw");
        finalResultOutput.style.color = "orange";
    } else if (playerPlay == "playerPaper" && computerPlay == "computerPaper") {
        littleResult = "Paper vs Paper = Unentschieden!";
        // paperStyle.style.border = "3px solid orange";
        paperStyle.classList.add("draw");
        finalResultOutput.style.color = "orange";
    }
    else if (playerPlay == "playerScissors" && computerPlay == "computerScissors") {
        littleResult = "Scissors vs Scissors = Unentschieden!";
        // scissorsStyle.style.border = "3px solid orange";
        scissorsStyle.classList.add("draw");
        finalResultOutput.style.color = "orange";
    }
    //Player Gewinnt:
    else if (playerPlay == "playerRock" && computerPlay == "computerScissors") {
        littleResult = "Rock schlägt Scissors = Player Gewinnt!";
        // rockStyle.style.border = "3px solid green";
        rockStyle.classList.add("winning");
        finalResultOutput.style.color = "green";
        playerPoints++;
    } else if (playerPlay == "playerPaper" && computerPlay == "computerRock") {
        littleResult = "Rock schlägt Scissors = Player Gewinnt!";
        // paperStyle.style.border = "3px solid green";
        paperStyle.classList.add("winning");
        finalResultOutput.style.color = "green";
        playerPoints++;
    } else if (playerPlay == "playerScissors" && computerPlay == "computerPaper") {
        littleResult = "Scissors schlägt Paper = Player Gewinnt!";
        // scissorsStyle.style.border = " solid green";
        scissorsStyle.classList.add("winning");
        finalResultOutput.style.color = "green";
        playerPoints++;
    }
    //Computer gewinnt
    else if (playerPlay == "playerRock" && computerPlay == "computerPaper") {
        littleResult = "Paper schlägt Rock = Computer Gewinnt!";
        // rockStyle.style.border = "3px solid green";
        rockStyle.classList.add("lose");
        finalResultOutput.style.color = "red";
        computerPoints++;
    } else if (playerPlay == "playerPaper" && computerPlay == "computerScissors") {
        littleResult = "Scissors schlägt Paper = Computer Gewinnt!";
        // paperStyle.style.border = "3px solid red";
        paperStyle.classList.add("lose");
        finalResultOutput.style.color = "red";
        computerPoints++;
    } else if (playerPlay == "playerScissors" && computerPlay == "computerRock") {
        littleResult = "Rock schlägt Scissors = Computer Gewinnt!";
        // scissorsStyle.style.border = "3px solid red";
        scissorsStyle.classList.add("lose");
        finalResultOutput.style.color = "red";
        computerPoints++;
    }

    computerOutput.innerHTML = computerPoints;
    playerOutput.innerHTML = playerPoints;
    played.innerHTML = playedRounds;
    finalResultOutput.innerHTML = littleResult;
    showResult();

}

function roundAmounts(value) {
    switch (value) {
        case "5": rounds = 5; break;
        case "10": rounds = 10; break;
        case "15": rounds = 15; break;
        case "20": rounds = 20;
    }
    toplay.innerHTML = rounds;

}

function showResult() {
    if (rounds == playedRounds) {
        if (playerPoints > computerPoints) {
            console.log("Player wins");
            finalResultOutput.innerHTML = "Du Gewinnst";
        }
        else if (playerPoints < computerPoints) {
            console.log("Computer wins");
            finalResultOutput.innerHTML = "Computer Gewinnt";
        }
        else if (playerPoints === computerPoints) {
            console.log("its a draw");
            finalResultOutput.innerHTML = "Leider ein unentschieden";
        }

        PlayAgainButton.style.opacity = "1";
        PlayAgainButton.style.display = "inline";
    } else {

    }
}

function resetGame() {
    rounds = "0";
    playerPoints = "0";
    computerPoints = "0";
    playedRounds = "0";
    computerOutput.innerHTML = computerPoints;
    playerOutput.innerHTML = playerPoints;
    played.innerHTML = playedRounds;
    toplay.innerHTML = rounds;
    document.getElementById("radio5").checked = false;
    document.getElementById("radio10").checked = false;
    document.getElementById("radio15").checked = false;
    document.getElementById("radio20").checked = false;
    finalResultOutput.innerHTML = "Jetzt Spielen";
    PlayAgainButton.style.opacity = "0";
    PlayAgainButton.style.display = "none";
    roundChoose.style.display = "inline";
    roundCounter.style.display = "none";

}




