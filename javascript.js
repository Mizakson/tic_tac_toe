// tic tac toe js

function Gameboard() {
    let row = [[0], [0], [0]];

    let board = [
        row,
        row,
        row
    ];

    const getGameboard = () => board;

    function addMarker(col, row, player) {
        col = board[col];
        row = board[row]
    }

    return { board };
};



function gameController(player1, player2) {
    
    let players = [
        {
            name: player1,
            marker: 'X'
        },
        {
            name: player2,
            marker: 'O'
        }
    ];

    let board = Gameboard().board;

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    return { players }; 

}
