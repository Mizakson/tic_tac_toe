// tic tac toe js

const gameBoard = (function() {
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

const startBtn = document.querySelector("#start");
const restartBtn = document.querySelector("#restart");

startBtn.addEventListener("click", () => {
    GameController.startMatch();
});

restartBtn.addEventListener("click", () => {
    alert("TEST");
});