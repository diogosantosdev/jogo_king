//largura / altura tabuleiro
let width = 10;
let height = 4;


//criação dos jogadores
players = [{name: "jogador 1",position: 0,color: "blue"},{name: "jogador 2",position: 0,color: "green"}];

let currentPlayerTurn = 0;

board = [];
let position = 0;

//jogador ganhou ou não ?
let win = false;

window.rollDice = () => {

  if (win) {
  return;
}

let currentPlayer = players[currentPlayerTurn];

//roll do dado random

roll = Math.floor(Math.random() * 5 + 1);
console.log(currentPlayer.name +", saiu um ", roll); //imprime o valor que saiu ao jogador

  //aumento da posição atual do jogador

  currentPlayer.position = currentPlayer.position + roll;
  

  //condição de vitoria com "arrebentar" se o jogador passar a casa dos 50

  if (currentPlayer.position == 50)  {
    console.log(currentPlayer.name + " GANHOU!");
    win = true; 
    
  }

  if (currentPlayer.position > 50) {
    console.log(currentPlayer.name + " Arrebentou! Voltaste ao inicio");
    win = false; 

  }

  currentPlayerTurn++; //troca de turno jogador
  if (currentPlayerTurn >= players.length) {
    currentPlayerTurn = 0;
  }

createBoard(); }


for (let y = height; y >= 0; y--) {
  let row = [];

  board.push(row);
  for (let x = 0; x < width; x++) {
    row.push({x,y,occupied: null,position  });
    position++;
  }
}


boardSize = 50;
createBoard = () => {

  let boardOnScreen = ``;
  board.forEach(row => {
    row.forEach(square => {
    boardOnScreen = boardOnScreen + `<div class=square style="top:${square.y * boardSize}px; left:${square.x * boardSize}px; background-color:${square.color}"></div>`;

    });

  });

  players.forEach(player => {

    let square = null;
    board.forEach(row => {
      row.forEach(square => {
        if (square.position == player.position) {
        boardOnScreen = boardOnScreen + `<div class=player style="top:${square.y * boardSize +6 }px; left:${square.x * boardSize + 15}px;background-color:${player.color}"></div>`;
        }
      });

    });

  });

   //imprime board na tela
  document.getElementById("board").innerHTML = boardOnScreen;
};


createBoard();