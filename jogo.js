//largura / altura tabuleiro
let width = 10;
let height = 4;

//board com json


/*let board = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];*/




//criação dos jogadores
players = [{name: "Jogador 1",position: 0,color: "blue"},{name: "Jogador 2",position: 0,color: "green"}];

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
let roll1=document.getElementById("roll1")
 roll1.innerHTML=currentPlayer.name +", saiu um " + roll;
 


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

//for (i=position; position <= boardSize ;i++) {

  //window.square.innerHTML == position[i];

  //}


  /*board.numerar(square,i => {

    for(i=1 ; i<=boardSize ;i++) {

      square.innerHTML == [i]
    }

  })*/

for (let y = height; y >= 0; y--) {
  let row = [];

  board.push(row);

  for (let x = 0; x < width; x++) {
    row.push({x,y,position, }); 
    position++;

  }

}



let boardSize = 50;




createBoard = () => {

  let boardOnScreen = ``; //posição da board 
  board.forEach(row => {
    row.forEach(square => {

      for (let i=0 ; i <= square.position +1  ; i++) {
    
    boardOnScreen = boardOnScreen + `<div class=square style="top:${square.y * boardSize}px; left:${square.x * boardSize}px; background-color:${square.color}">${[i]}</div>`;
 
  
  
      }

    }); // iteração do numero para cada square ( duvida ! ) . square.position
    
    

  });

  /*function numbers() {

      let boxes = document.square.innerHTML;

      boxes.forEach((box,i)=> {

        for(i=1;i<boardSize;i++){

          box.innerHTML=[i];
        }

        return boxes
      }) 



  } */

  
players.forEach(player => {

     //posição do player conforme a board
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