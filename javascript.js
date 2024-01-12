// tic tac toe js

function Gameboard() {
    let board = [];

    // fill gameboard arr with 9 cells
    // with 0 as value

    let rows = 3;
    let columns = 3;
    
    //two-dimensional array
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i][j] = Cell().value;
      }
    }


    const getGameboard = () => board;


    return { board, getGameboard };

};

function Cell() {
    let value = 0;

    function changeValue(player) {
        value = player;
    }

    return { value };

};


function gameController(player1, player2) {
    
    const board = Gameboard();

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


    let activePlayer = players[0];

    function changeMarker(col, row, player) {
        player = activePlayer.marker;
        board[col][row] = player;
    };

    // connect 4 console example switch turn method
    const switchTurn = () => {
        console.log('switching turn...');
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
        console.log(`${activePlayer}'s turn...`);
    }

    const getActivePlayer = () => activePlayer;


    return { players, switchTurn, getActivePlayer, changeMarker, board }; 

}