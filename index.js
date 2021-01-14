// html elements

const player = document.querySelector('.Player');
const reset = document.querySelector('.resetGame');
const game = document.querySelectorAll('.gameBox'); //array

// game conts

// player names
var player1 = prompt("player 1, what is your name?");
const player1Upper = player1.charAt(0).toUpperCase() + player1.slice(1);
var player2 = prompt("Player 2, what is your name?");
const player2Upper = player2.charAt(0).toUpperCase() + player2.slice(1);
// game var

let gameisPlaying = true;
let xIsNext = true;

let xSym = 'X';
let oSym = 'O';



// funnctions
const winnerOfGame = (letter) => {
  gameisPlaying = false;


  if (letter === 'X') {
    player.innerHTML = `${player1Upper} has won! `;
  } else {
    player.innerHTML = `${player2Upper} has won!`;
  }

};

const gameStatus = () => {
  const topLeft = game[0].classList[1]; // tells us if theres an x or o
  const topMiddle = game[1].classList[1];
  const topRight = game[2].classList[1];
  const middleLeft = game[3].classList[1];
  const middleMiddle = game[4].classList[1];
  const middleRight = game[5].classList[1];
  const bottomLeft = game[6].classList[1];
  const bottomMiddle = game[7].classList[1];
  const bottomRight = game[8].classList[1];


  // check winner

  // checks rows

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    winnerOfGame(topLeft);

  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    winnerOfGame(middleLeft);
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    winnerOfGame(bottomLeft);
  }
  // checks coloumns
  else if (topRight && topRight === middleRight && topRight === bottomRight) {
    winnerOfGame(topRight);
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    winnerOfGame(topMiddle);
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    winnerOfGame(topLeft);
  }

  // check diagnals
  else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    winnerOfGame(topRight);
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    winnerOfGame(topLeft);

  }
      // check ties
   else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight)
  {
    gameisPlaying = false;
    player.innerHTML = 'Game is tied!';
  }
  else
  {
    xIsNext = !xIsNext;
      if (xIsNext)
      {
          player.innerHTML = `${player1Upper} is next`;
        }
         else
         {
            player.innerHTML = `${player2Upper} is next`;
         }
 }
};


// event handlers

const handleReset = () => {
  xIsNext = true;
  player.innerHTML = `${player1Upper} is next`;
  for (const gameB of game) {
    gameB.classList.remove('X');
    gameB.classList.remove('O');
  }
  gameisPlaying = true;
};

const handleGame = (e) => {
  const classList = e.target.classList;


  if (!gameisPlaying || classList[1] === 'X' || classList[1] === 'O') {
    return;
  }
  if (xIsNext) {
    classList.add('X');
    gameStatus();

  } else {
    classList.add('O');
    gameStatus();

  }

};


// event listners

reset.addEventListener('click', handleReset);

for (const gameB of game) {
  gameB.addEventListener('click', handleGame);
}
