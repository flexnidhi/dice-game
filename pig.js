'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');


let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const resetgame = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
};

btnRoll.addEventListener('click', function () {
    if (isPlaying) {
        const diceNum = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${diceNum}.png`;

        if (diceNum !== 1) {
            currentScore += diceNum;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (isPlaying) {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            isPlaying = false;
            document.querySelector(`#name--${activePlayer}`).textContent = 'Winner!';
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});
const resetGame = function () {
  
  const player1Name = prompt("Enter Player 1's name:");
  const player2Name = prompt("Enter Player 2's name:");

  document.querySelector('#name--0').textContent = player1Name;
  document.querySelector('#name--1').textContent = player2Name;
}
btnNew.addEventListener('click', resetGame);


resetGame();
