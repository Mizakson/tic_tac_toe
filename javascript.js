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

function checkForWinner(gameboard) {
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    // iterate through board to check for winningCombinations
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {
            return true;
        }
    }

    return false;
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

        if (checkForWinner(Gameboard.getGameboard(), players[currentPlayerIndex].marker)) {
            matchOver = true;
            alert(`${players[currentPlayerIndex].name} wins...`)
        }
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