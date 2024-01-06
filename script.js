let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = "you win! Your " + userChoice + " beats " + compChoice;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = "you lost. " + compChoice + " beats your " + userChoice;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("user choice = " + userChoice);
    // generate computer choice 
    let compChoice = genCompChoice();
    console.log("comp choice = " + compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" + choiceId);
        playGame(userChoice);
    })
});