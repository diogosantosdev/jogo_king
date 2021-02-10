// dificuldade 1 ( 1-10 )
let questions1 = [
  {
      question: "Qual é a capital de Portugal ?",
      level: 1,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Italia ?",
      level: 1,
      answer: "Lisboa",
  },
  {  
       question: "Qual é a capital de Espanha ?",
      level: 1,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de França ?",
      level: 1,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Dinamarca ?",
      level: 1,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Suiça ?",
      level: 1,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Eslováquia ?",
      level: 1,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Russia ?",
      level: 1,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Holanda ?",
      level: 1,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Bélgica ?",
      level: 1,
      answer: "Lisboa",
  }]


  // dificuldade 2 ( 11-20 )
let questions2 = [
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 2,
      answer: "Lisboa",
  },]
  


  // dificuldade 3 ( 21-30 )
let questions3 = [
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 3,
      answer: "Lisboa",
  },]
  


  // dificuldade 4 ( 31-40 )
let questions4 = [
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Portugal ?",
      level: 4,
      answer: "Lisboa",
  },]
  

  // dificuldade 5 ( 41-50 )
let questions5 = [
  {
      question: "Qual é a capital de Portugal ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Espanha ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Italia ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Grecia ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de França ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital de Inglaterra ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Estonia ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Dinamarca ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital do Japão ?",
      level: 5,
      answer: "Lisboa",
  },
  {
      question: "Qual é a capital da Suiça ?",
      level: 5,
      answer: "Lisboa",
  },]



//largura / altura tabuleiro
let width = 10;
let height = 4;

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
  

//arrays de dificuldade.
  availableQuestions1 = [...questions1]
    availableQuestions2 = [...questions2]
      availableQuestions3 = [...questions3]
        availableQuestions4 = [...questions4]
          availableQuestions5 = [...questions5]

  const questionr = document.querySelector(".pergunta");

  

  if (currentPlayer.position >= 1 && currentPlayer.position <= 10) {

    
    const questionscount = Math.floor(Math.random() * availableQuestions1.length)
    currentQuestion = availableQuestions1[questionscount]
    questionr.innerHTML = currentQuestion.question

    let roll2=document.querySelector(".roll2")
    roll2.innerHTML=currentPlayer.name +", saiu um " + roll;


    document.querySelector(".popup").style.display = " flex ";
    
    document.querySelector(".button2").addEventListener("click",function(){

    document.querySelector(".popup").style.display = "none";

    })

    /*const resposta1 = document.querySelector(".input")

    
    if ( resposta1.innerText == currentQuestion.answer) {

      currentPlayerTurn = 0
  
      roll2=document.querySelector(".roll2")
      roll2.innerHTML="ACERTOU!, lançe outra vez ! " 
  
  
    }*/
 
  }

  if (currentPlayer.position >= 11 && currentPlayer.position <= 20) {

    
    const questionscount = Math.floor(Math.random() * availableQuestions2.length)
    currentQuestion = availableQuestions2[questionscount]
    questionr.innerHTML = currentQuestion.question

    let roll2=document.querySelector(".roll2")
    roll2.innerHTML=currentPlayer.name +", saiu um " + roll;


    document.querySelector(".popup").style.display = " flex ";
    document.querySelector(".button2").addEventListener("click",function(){

      document.querySelector(".popup").style.display = "none";
    })

  }

  if (currentPlayer.position >= 21 && currentPlayer.position <= 30) {

    
    const questionscount = Math.floor(Math.random() * availableQuestions3.length)
    currentQuestion = availableQuestions3[questionscount]
    questionr.innerHTML = currentQuestion.question

    let roll2=document.querySelector(".roll2")
    roll2.innerHTML=currentPlayer.name +", saiu um " + roll;


    document.querySelector(".popup").style.display = " flex ";
    document.querySelector(".button2").addEventListener("click",function(){

      document.querySelector(".popup").style.display = "none";
    })

  }

  if (currentPlayer.position >= 31 && currentPlayer.position <= 40) {

    
    const questionscount = Math.floor(Math.random() * availableQuestions4.length)
    currentQuestion = availableQuestions4[questionscount]
    questionr.innerHTML = currentQuestion.question

    let roll2=document.querySelector(".roll2")
    roll2.innerHTML=currentPlayer.name +", saiu um " + roll;


    document.querySelector(".popup").style.display = " flex ";
    document.querySelector(".button2").addEventListener("click",function(){

      document.querySelector(".popup").style.display = "none";
    })

  }

  if (currentPlayer.position >= 41 && currentPlayer.position <= 50) {

    
    const questionscount = Math.floor(Math.random() * availableQuestions5.length)
    currentQuestion = availableQuestions5[questionscount]
    questionr.innerHTML = currentQuestion.question

    let roll2=document.querySelector(".roll2")
    roll2.innerHTML=currentPlayer.name +", saiu um " + roll;


    document.querySelector(".popup").style.display = " flex ";
    document.querySelector(".button2").addEventListener("click",function(){

      document.querySelector(".popup").style.display = "none";
    })

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

    }); 
    
    });

  
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