// tic tac toe js

const Gameboard = (function() {
    let gameboard = ["","","","","","","","",""];

    const render = () => {
        let gameboardHTML = "";
        
        gameboard.forEach((cell, index) => {
            gameboardHTML += `<div class="cell" id="cell-${index}">${cell}</div>`;
        })
        document.querySelector("#gameboard").innerHTML = gameboardHTML;

        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("click", GameController.handleClick);
        })
        
    }

    const update = (index, value) => {
        gameboard[index] = value;
        render();
    };

    // accessor method
    const getGameboard = () => gameboard;

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            Gameboard.update(i, "");
        }
        render();
    }

    return { render, update, getGameboard, restart };

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

    const handleClick = (event) => {
        // only show index number per cell on click
        let index = parseInt(event.target.id.split("-")[1]);
        
        // turn mechanism
        // use ternary operator

        if (Gameboard.getGameboard()[index] !== "")
        return;

        Gameboard.update(index, players[currentPlayerIndex].marker);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    return { startMatch, handleClick };

})();

const startBtn = document.querySelector("#start");
const restartBtn = document.querySelector("#restart");

startBtn.addEventListener("click", () => {
    GameController.startMatch();
});

restartBtn.addEventListener("click", () => {
    Gameboard.restart();
});