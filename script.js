let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreMsg = document.querySelector("#user");
const computerScoreMsg = document.querySelector("#computer");


//computer choice
const computerChoice = () =>{
    const options = ["rock", "paper", "scissors"] //storing values in array
    const randomIndex = Math.floor(Math.random() * 3); //floor= removes decimal, random * 3 = generates random number upto index 2
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText ="Draw";
    msg.style.backgroundColor = " #081b31";
}

const showWinner = (userWin, userChoice, genComputerChoice) => {
    if(userWin){
        userScore++;
        userScoreMsg.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${genComputerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScoreMsg.innerText = computerScore;
        msg.innerText = `You lose! ${genComputerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

//user choice
const playGame = (userChoice) => {
    //generate computer choice
    const genComputerChoice = computerChoice();

    if(userChoice === genComputerChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ===  "rock"){
            userWin = genComputerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = genComputerChoice === "scissors" ? false : true;
        }else{
            userWin = genComputerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, genComputerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}) 