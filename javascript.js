// tic tac toe js

const Gameboard = (function() {
    let gameboard = ["","","","","","","","",""];

    const render = () => {
        let gameboardHTML = "";
        
        gameboard.forEach((cell, index) => {
            gameboardHTML += `<div class="cell" id="cell-${index}">${cell}</div>`;
        })
        document.querySelector("#gameboard").innerHTML = gameboardHTML;
    }

    return { render };

})();

const createPlayer = (name, marker) => {
    return { name, marker };
}


const GameController = (function() {
    
    let players = [];

    let currentPlayerIndex;

    let gameOver;

    const startMatch = () => {
        players = [
            createPlayer(document.querySelector("#player1").value,"X"),
            createPlayer(document.querySelector("#player2").value,"O")
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }

    return { startMatch };

})();

const startBtn = document.querySelector("#start");
const restartBtn = document.querySelector("#restart");

startBtn.addEventListener("click", () => {
    GameController.startMatch();
});

restartBtn.addEventListener("click", () => {
    alert("TEST");
});