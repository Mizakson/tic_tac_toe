// tic tac toe js

// looking at building a house from the inside out connect4 example
// using initial logic from aritcle for console game
// will refactor it for DOM and UI, add player winning logic
// by Alex Younger

function Gameboard() {
    const gameboard = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < columns; j++) {
            gameboard[i].push(Cell());
        }
    }

    const getBoard = () => gameboard;

    // put the marker in the cell
    const dropMarker = (column, player) => {
        const availableCells = gameboard.filter((row)=> row[column].getValue() === 0)
        .map(row => row[column]);

        // invalid move
        if (!availableCells.length) return;

        const lowestRow = availableCells.length - 1;
        gameboard[lowestRow][column].addMarker(player);
    };

    const printBoard = () => {
        const gameboardWithCellValues = gameboard.map((row) => row.map((cell) => cell.getValue()));
        console.log(gameboardWithCellValues);
    }

    return { getBoard, dropMarker, printBoard };

};


function Cell() {
    let value = 0;

    const addMarker = (player) => {
        value = player;
    };

    const getValue = value;

    return { addMarker, getValue };

};


function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            marker: 'X'
        },
        {
            name: playerTwoName,
            marker: 'O'
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (column) {
        console.log(`Moving ${getActivePlayer().name}'s marker into column ${column}...`);
        board.dropMarker(column, getActivePlayer().marker);

        switchPlayerTurn();
        printNewRound();
    };

    printNewRound();

    return { playRound, getActivePlayer };

}

const game = GameController;
