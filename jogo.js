// dificuldade 1 ( 1-10 )
let questions1 = [
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Italia ?",
    answer: "Roma",
  },
  {
    question: "Qual é a capital de Espanha ?",
    answer: "Madrid",
  },
  {
    question: "Qual é a capital de França ?",
    answer: "Paris",
  },
  {
    question: "Qual é a capital da Dinamarca ?",
    answer: "Copenhaga",
  },
  {
    question: "Qual é a capital da Suiça ?",
    answer: "Berna",
  },
  {
    question: "Qual é a capital da Eslováquia ?",
    answer: "Bratislava",
  },
  {
    question: "Qual é a capital da Russia ?",
    answer: "Moscovo",
  },
  {
    question: "Qual é a capital da Holanda ?",
    answer: "Amesterdão",
  },
  {
    question: "Qual é a capital da Bélgica ?",
    answer: "Bruxelas",
  },
];

// dificuldade 2 ( 11-20 )
let questions2 = [
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
];

// dificuldade 3 ( 21-30 )
let questions3 = [
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
];

// dificuldade 4 ( 31-40 )
let questions4 = [
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
];

// dificuldade 5 ( 41-50 )
let questions5 = [
  {
    question: "Qual é a capital de Portugal ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Espanha ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Italia ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital da Grecia ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de França ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital de Inglaterra ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital da Estonia ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital da Dinamarca ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital do Japão ?",
    answer: "Lisboa",
  },
  {
    question: "Qual é a capital da Suiça ?",
    answer: "Lisboa",
  },
];

//largura / altura tabuleiro
let width = 10;
let height = 4;

//criação dos jogadores
let players = [
  { name: "Jogador 1", position: 0, color: "red" },
  { name: "Jogador 2", position: 0, color: "orange" },
];

let currentPlayerTurn = 0;

let board = [];

let position = 0;

rollDice = () => {
  
    let currentPlayer = players[currentPlayerTurn];

  //roll do dado random

  let roll = Math.floor(Math.random() * 5 + 1);

  let roll1 = document.getElementById("roll");

  roll1.innerHTML = currentPlayer.name + ", saiu um " + roll;

  //aumento da posição atual do jogador

  var questionr = document.querySelector(".pergunta");

  var questionscount = Math.floor(Math.random() * questions1.length);

  var currentQuestion = questions1[questionscount].question;

  var resp = questions1[questionscount].answer;

  console.log(questions1[questionscount].answer);


  // condiçao de posição 1-10

  if (currentPlayer.position >= 0 && currentPlayer.position <= 10) {

    questionr.innerHTML = currentQuestion;
    document.querySelector(".popup").style.display = " flex ";

    let roll2 = document.querySelector(".rollPanel");

    roll2.innerHTML = currentPlayer.name + ", saiu um " + roll;

    document
      .querySelector(".answerButton")
      .addEventListener("click", function (e) {
        let input = document.getElementById("input").value;

        if (input == resp) {


            //currentPlayer.position = currentPlayer.position + roll
          console.log("acertou");
        }

        if (input != resp) {

            //currentPlayer.position = currentPlayer.position - roll
          console.log("errou");
        }

        debugger;

        console.log(resp);

        document.getElementById("input").value = "";

        currentPlayerTurn++;

        if (currentPlayerTurn > players.length) {
          currentPlayerTurn = 0;
        }

        document.querySelector(".popup").style.display = "none";

        console.log(questionscount);
        console.log(resp);
      });

    currentPlayer.position = currentPlayer.position + roll;
  }

  if (currentPlayer.position >= 11 && currentPlayer.position <= 20) {
  }

  if (currentPlayer.position >= 21 && currentPlayer.position <= 30) {
  }

  if (currentPlayer.position >= 31 && currentPlayer.position <= 40) {
  }

  if (currentPlayer.position >= 41 && currentPlayer.position <= 50) {
  }

  if (currentPlayer.position == 50) {

    alert(`O ${currentPlayer.name} é o REI !`)
  }

  createBoard();

};

for (let y = height; y >= 0; y--) {
  let row = [];

  board.push(row);

  for (let x = 0; x < width; x++) {
    row.push({ x, y, position });

    position++;
  }
}

let boardSize = 50;

createBoard = () => {
  let boardOnScreen = ``; //posição da board

  board.forEach((row) => {
    row.forEach((square) => {
      for (let i = 0; i <= square.position + 1; i++) {
        boardOnScreen =
          boardOnScreen +
          `<div class=square style="top:${square.y * boardSize}px; left:${
            square.x * boardSize
          }px; background-color:${square.color}">${[i]}</div>`;
      }
    });
  });

  players.forEach((player) => {
    //posição do player conforme a board
    board.forEach((row) => {
      row.forEach((square) => {
        if (square.position == player.position) {
          boardOnScreen =
            boardOnScreen +
            `<div class=player style="top:${square.y * boardSize + 6}px; left:${
              square.x * boardSize + 15 //valor de ajuste da peça do player
            }px;background-color:${player.color}"></div>`;
        }
      });
    });
  });

  //imprime board na tela
  document.getElementById("board").innerHTML = boardOnScreen;
};

createBoard();
