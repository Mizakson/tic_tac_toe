// tic tac toe js


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
    }
}


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