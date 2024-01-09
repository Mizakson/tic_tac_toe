// tic tac toe js

// Initial logic for this project used 
// from the article 'Building a House From The Inside Out'
// by Alex Younger

// Looked at his logic behind a connect four console game example
// and am working on refactoring that logic into this project

function Gameboard() {
    const rows = 3;
    const cols = rows;
    const gameboard = [];

    const innerRow = 0;

    // gameboard creation
    // common way of making 2d array
    for (let i = 0; i < rows; i++) {
        // row 0 is the top row
        gameboard[i] = [[], [], []];
        for (let j = 0; j < cols; j++) {
            // col j is left-most column
            gameboard[j] = [[], [], []];
        }
    };

    // ui render
    const getGameboard = () => gameboard; 

    const addMarker = () => {
        // have to add to specific row, col 
    }

    const showGameBoard = () => {
        // map is the same as using a loop, just a method for arrays
        const filledBoard = gameboard.map((row) => row.map((cell) => cell.getVal()));
        console.log(filledBoard);
    }


    return { getGameboard, addMarker, showGameBoard };

}

// each box on the board
function Cell() {
    // 3 possible vals
    // 0 - empty
    // 1 - player1 marker
    // 2 - player2 marker

    let val = 0;

    const addMarker = (player) => {
        val = player;
    }

    const getVal = () => val;

    return { addMarker, getVal };
};


const GameFlow = function(name1, name2) {
    const gameboard = Gameboard();

    const players = [
        {
            name: name1,
            marker: 'X'
        },
        {
            name: name2,
            marker: 'O'
        }
    ];

    // default turn is player 1
    let activePlayer = players[0];

    const changePlayerTurn = () => {
        // ternary operator
        // if players[0] is the active player, then switch to players[1]
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const newRound = () => {
        gameboard.showGameBoard();
        console.log(`${getActivePlayer().name}'s turn...`);
    };

    const playRound = () => {
        console.log(`Adding ${getActivePlayer().name}'s ${getActivePlayer().marker} into
        column ${col}, row ${row}`);

        gameboard.addMarker(col, row, getActivePlayer().marker);

        // add game winner logic here
        // add game win message here

        changePlayerTurn();
        newRound();
    };
    
    newRound();

    return { newRound, getActivePlayer };

}

const game = GameFlow('Max', 'Bob');