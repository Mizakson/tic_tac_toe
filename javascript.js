// tic tac toe js

// looking at building a house from the inside out connect4 example
// using initial logic from aritcle for console game
// will refactor it for DOM and UI, add player winning logic
// by Alex Younger

function Gameboard() {
    const gameboard = [];
    const rows = 3;
    const columns = 3;

    // 2d array that shows gameboard state
    for (let i = 0; i < rows; i++) {
        gameboard[i] = [];
        for (let j = 0; j < columns; j++) {
            gameboard[i].push(Cell());
        }
    }

    // method used for ui render 
    const getBoard = () => gameboard;

    // put the marker in the cell
    const dropMarker = (column, player) => {
        const availableCells = gameboard.filter((row)=> row[column].getValue() === 0)
        .map(row => row[column]);

        // invalid move
        if (!availableCells.length) return;

        // else, cell is valid, being the last one in the filtered array
        const lowestRow = availableCells.length - 1;
        gameboard[lowestRow][column].addMarker(player);
    };

    // prints board to console
    // not needed after ui is finished
    const printBoard = () => {
        const gameboardWithCellValues = gameboard.map((row) => row.map((cell) => cell.getValue()));
        console.log(gameboardWithCellValues);
    }

    // board interaction api
    return { getBoard, dropMarker, printBoard };

};

// each cell has 3 states
// empty, X, or O
function Cell() {
    let value = 0;

    // change cell value
    const addMarker = (player) => {
        value = player;
    };

    // get currecnt value of the cell
    const getValue = () => value;

    return { addMarker, getValue };

};

// control game state and game flow
// will add winner logic
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

    const playRound = (column) => {
        // move marker for current player
        console.log(`Moving ${getActivePlayer().name}'s marker into column ${column}...`);
        board.dropMarker(column, getActivePlayer().marker);

        // check for game winner here
        // win message here

        // switch turns
        switchPlayerTurn();
        printNewRound();
    };

    printNewRound();

    // getActive player needed for UI version. not current console version
    return { playRound, getActivePlayer };

}

const game = GameController();
