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
    question: "Qual é a capital da Alemanha ?",
    answer: "Berlim",
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
    question: "Qual é a capital do México ?",
    answer: "Cidade do México",
  },
  {
    question: "Qual é a capital do Canadá ?",
    answer: "Otava",
  },
  {
    question: "Qual é a capital da China ?",
    answer: "Pequim",
  },
  {
    question: "Qual é a capital da Noruega ?",
    answer: "Oslo",
  },
  {
    question: "Qual é a capital da Bielorússia ?",
    answer: "Minsk",
  },
  {
    question: "Qual é a capital de Israel ?",
    answer: "Jerusalém",
  },
  {
    question: "Qual é a capital da Eslováquia ?",
    answer: "Bratislava",
  },
  {
    question: "Qual é a capital da Eslovénia ?",
    answer: "Ljiubliana",
  },
  {
    question: "Qual é a capital da Finlândia ?",
    answer: "Helsinquia",
  },
  {
    question: "Qual é a capital do Peru ?",
    answer: "Lima",
  },
];

// dificuldade 3 ( 21-30 )
let questions3 = [
  {
    question: "Qual é a capital de Angola ?",
    answer: "Luanda",
  },
  {
    question: "Qual é a capital da Bosnia ?",
    answer: "Sarajevo",
  },
  {
    question: "Qual é a capital de Cuba?",
    answer: "Havana",
  },
  {
    question: "Qual é a capital do Egito?",
    answer: "Cairo",
  },
  {
    question: "Qual é a capital da Irlanda ?",
    answer: "Dublin",
  },
  {
    question: "Qual é a capital da Escócia ?",
    answer: "Edimburgo",
  },
  {
    question: "Qual é a capital da Coreia do Sul ?",
    answer: "Seoul",
  },
  {
    question: "Qual é a capital da Suécia ?",
    answer: "Estocolmo",
  },
  {
    question: "Qual é a capital da Ucrânia ?",
    answer: "Kiev",
  },
  {
    question: "Qual é a capital da Venezuela ?",
    answer: "Caracas",
  },
];

// dificuldade 4 ( 31-40 )
let questions4 = [
  {
    question: "Qual é a capital do Azerbeijão ?",
    answer: "Baku",
  },
  {
    question: "Qual é a capital da Bulgária ?",
    answer: "Sofia",
  },
  {
    question: "Qual é a capital da Croácia?",
    answer: "Zagreb",
  },
  {
    question: "Qual é a capital da Estónia ?",
    answer: "Talin",
  },
  {
    question: "Qual é a capital da Letónia ?",
    answer: "Riga",
  },
  {
    question: "Qual é a capital da Nova Zelândia ?",
    answer: "Welligton",
  },
  {
    question: "Qual é a capital da Sérvia ?",
    answer: "Belgrado",
  },
  {
    question: "Qual é a capital de Taiwan ?",
    answer: "Taipei",
  },
  {
    question: "Qual é a capital da Turquia ?",
    answer: "Ancara",
  },
  {
    question: "Qual é a capital do Vietnam ?",
    answer: "Hanoi",
  },
];

// dificuldade 5 ( 41-50 )
let questions5 = [
  {
    question: "Qual é a capital da Albânia ?",
    answer: "Tirana",
  },
  {
    question: "Qual é a capital do Chipre ?",
    answer: "Nicosia",
  },
  {
    question: "Qual é a capital da Georgia ?",
    answer: "Tbilisi",
  },
  {
    question: "Qual é a capital da Islândia ?",
    answer: "Reiquejavique",
  },
  {
    question: "Qual é a capital do Iraque ?",
    answer: "Bagdad",
  },
  {
    question: "Qual é a capital do Libano ?",
    answer: "Beirute",
  },
  {
    question: "Qual é a capital da Moldávia?",
    answer: "Chisinau",
  },
  {
    question: "Qual é a capital da Coreia do Norte ?",
    answer: "Pyongyang",
  },
  {
    question: "Qual é a capital do Qatar ?",
    answer: "Doha",
  },
  {
    question: "Qual é a capital do Uganda?",
    answer: "Kampala",
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

let position=0

let questionscount 

let currentPlayer = players[currentPlayerTurn]

let selectDifficulty 

let roll

let square




function resposta() { //função de validação de input com os arrays



  let resp = selectDifficulty[questionscount].answer; 
  
  let input = document.getElementById("input").value;

  if (input == resp) {

    alert("ACERTOU")


    console.log("acertou");

    if (currentPlayer.position == 50 ) {

   

      alert(`O ${currentPlayer.name} é o REI !`)
    }
  
  }
  
  else

   {

    alert("ERROU")

    currentPlayer.position = currentPlayer.position - roll //currentPlayer volta casas conforme o roll se falhar

    console.log("errou");
  
  }

 



  console.log(resp); //debug

  document.getElementById("input").value = "";


  document.querySelector(".popup").style.display = "none";
  
  
  }




  rollDice = () => {

  
  currentPlayer = players[currentPlayerTurn];


  //roll do dado random

  roll = Math.ceil(Math.random() * 6 ); //0,1 == 1 , 6 == 6

  let roll1 = document.getElementById("roll");

  roll1.innerHTML = currentPlayer.name + ", saiu um " + roll;

  

  

  

  


  //dificuldade

  if (currentPlayer.position >= 0 && currentPlayer.position <= 10) {

    selectDifficulty = questions1 //alteração do array conforme a condição


  }

  if (currentPlayer.position >= 11 && currentPlayer.position <= 20) {

    selectDifficulty = questions2


  }

  if (currentPlayer.position >= 21 && currentPlayer.position <= 30) {

    selectDifficulty = questions3


  }

  if (currentPlayer.position >= 31 && currentPlayer.position <= 40) {

    selectDifficulty = questions4

  }

  if (currentPlayer.position >= 41 && currentPlayer.position <= 50) {

    selectDifficulty = questions5

  }


  if (currentPlayer.position > 50 ) {

    currentPlayer.position = currentPlayer.position - 50
  
  }




  document.querySelector(".popup").style.display = " flex ";

    let roll2 = document.querySelector(".rollPanel");

    roll2.innerHTML = currentPlayer.name + ", saiu um " + roll;




  let questionr = document.querySelector(".pergunta"); //seleção pergunta html

  questionscount = Math.floor(Math.random() * selectDifficulty.length); //randomize pergunta

  let currentQuestion = selectDifficulty[questionscount].question;

  questionr.innerHTML = currentQuestion; //passagem da pergunta randomizada conforme o array para o utilizador

  

  
console.log(selectDifficulty[questionscount].answer); //debug

  currentPlayerTurn++; //incremento do turno



  if (currentPlayerTurn == players.length) {  //troca de turno jogador
    currentPlayerTurn = 0;
  }

  currentPlayer.position = currentPlayer.position + roll; //incremento da posição do currentPlayer



 
  createBoard(); // atualização da board depois da pergunta atual

};


//criação arrays da tabela para incrementação de posição

for ( let y = height ; y >= 0 ; y-- ) { //criação dos arrays row conforme a altura
  let row = [];

  board.push(row);

  for ( let x = 0; x < width ; x++ ) { //adicionar coordenadas à board para poder alterar o position
    row.push({ x, y, position });

    position++;

  }
}

let boardSize = 50;

createBoard = () => {

  //criação da board para o utlizador conseguir ver * só relativo à parte visual *

  let boardOnScreen = ``; //posição da board 
  

  board.forEach((row) => {

    row.forEach((square) => { //square definido em cima contudo com ligações ao .square do css

      for ( let i = 0; i <= square.position + 1 /* limite será a posição do proprio square até atingir o limite da board == 50 */ ; i++) {
        
        boardOnScreen =
          boardOnScreen +
          `<div class=square style="top:${square.y * boardSize}px; left:${square.x * boardSize}px; background-color:${square.color}">${[i]}</div>`;
      }
    });
  });

  players.forEach((player) => {
    //posição do player conforme a board
    board.forEach((row) => {

      row.forEach((square) => {

        if (square.position == player.position) {
          
          boardOnScreen = //posição da peça do currentPlayer em relação à board
            boardOnScreen +`<div class=player style="top:${square.y * boardSize + 6}px; left:${square.x * boardSize + 15 //valor de ajuste da peça do player
            }px;background-color:${player.color}"></div>`;
        }
      });
    });
  });

  //imprime board na tela
  document.getElementById("board").innerHTML = boardOnScreen;
};

createBoard();
