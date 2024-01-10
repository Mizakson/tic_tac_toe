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

const test = Gameboard();