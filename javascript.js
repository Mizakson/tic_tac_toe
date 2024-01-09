// tic tac toe js

// Initial logic for this project used 
// from the article 'Building a House From The Inside Out'
// by Alex Younger

// Looked at his logic behind a connect four console game example
// and am working on refactoring some of that logic into this project

function Gameboard() {
    const rows = 3;
    const cols = rows;
    const gameboard = [];

    // gameboard creation
    // common way of making 2d array
    for (let i = 0; i < rows; i++) {
        // row 0 is the top row
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            // col j is left-most column
            board[j] = [];
        }
    };

    // ui render
    const getGameboard = () => gameboard; 

    const addMarker = (row, player) => {
        // iterate through board array to check if val is 0
        const emptyCells = gameboard.filter((row) => row[col].getValue() === 0).map(row => row[col]);

        // stop if cell doesn't make it through the filter
        if (!emptyCells.length) return;

        // the valid cell is the last one that makes it through the filtered arr
        const lowestRow = emptyCells.length - 1;
        gameboard[lowestRow][col].addMarker(player);

    };

    const showGameBoard = () => {
        // map is the same as using a loop, just a method for arrays
        const filledBoard = gameboard.map((row) => row.map((cell) => cell.getValue()));
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
    ]
}