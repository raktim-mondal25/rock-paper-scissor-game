let userscore = 0;
let computerscore = 0;

const msgb = document.querySelector("#msg-para");
const userscorea = document.querySelector("#user-score");
const compscorea = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");

const computerchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomindex = Math.floor(Math.random() * 3); //it generates random number between 0 to 2  
    return options[randomindex]
};

const drawgame = () => {
    console.log("Game is draw");
    msgb.innerText = "IT IS DRAW";
    msgb.style.backgroundColor = "black";
}

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        console.log("You win");
        msgb.innerText = `YOU HAVE WON Your ${userchoice} beats ${compchoice}`;
        msgb.style.backgroundColor = "green";
        userscore++;
        userscorea.innerText = userscore;
    } else {
        console.log("You loose");
        msgb.innerText = `YOU HAVE LOST ${compchoice} beats Your ${userchoice}`;
        msgb.style.backgroundColor = "red";
        computerscore++;
        compscorea.innerText = computerscore;
    }
}

const playgame = (userchoice) => {
    //generate computer choice
    const compchoice = computerchoice();
    console.log("computer choice", compchoice);

    if (userchoice === compchoice) {
        //draw
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "rock" ? true : false;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log(`choice was clicked, ${userchoice}`);
        playgame(userchoice);
    });
});