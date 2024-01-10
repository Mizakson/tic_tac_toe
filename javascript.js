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

    function changePlayerTurn(player) {
        if (player === activePlayer) {
            player = players[1];
            console.log(`${activePlayer}'s turn...`);
        } else {
            player = activePlayer;
            console.log(`${players[1]}'s turn...`);
        }
    }

    function addMarker(col, row, player) {
        
        player = getActivePlayer;
        board[col][row] = [getActivePlayer().marker];
        return board;
    };

    return { players, changePlayerTurn, addMarker }; 

}
