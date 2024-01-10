// tic tac toe js

function Gameboard() {
    let emptyRow = [[0], [0], [0]];

    let emptyBoard = [
        emptyRow,
        emptyRow,
        emptyRow
    ];

    const getGameboard = () => emptyBoard;

    return { emptyBoard };
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

    let board = Gameboard().emptyBoard;

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    return { players }; 

}
