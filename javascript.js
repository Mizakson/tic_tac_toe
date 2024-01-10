// tic tac toe js

function Gameboard() {
    let board = [];
    let row = ['0', '0', '0'];

    for (let i = 0; i < 3; i++) {
        board.push(row);
    };

    const getGameboard = () => board;

    return { board, getGameboard };

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

    // connect 4 console example switch turn method
    const switchTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }

    const getActivePlayer = () => activePlayer;

    return { players }; 

}

const test = Gameboard();