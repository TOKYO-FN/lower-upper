'use strict';

// TODO 📉 Too low!
// TODO 📈 Too high!
// TODO 🎉 Correct number!
// TODO score by2l b wa7d f kol mara
// TODO awl ma bgyb el rakam s7 byb2a da el highscore
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
let randInt = () => Math.trunc(Math.random() * 20) + 1;

let clickFunc = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) displayMessage('⛔ No Number!');
  // when the player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent =
      document.querySelector('.guess').value;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score <= 1) {
      displayMessage('💥 Game Over!');
      document.getElementsByTagName('body')[0].style.backgroundColor =
        '#a94545';
      score = 0;
      displayScore(score);
    } else {
      score--;
      displayScore(score);
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    }
  }
  document.querySelector('.guess').value = '';
}; // end clickFunc

let againFunc = function () {
  score = 20;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = randInt();
}; // end againFunc

let secretNumber = randInt();

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', clickFunc);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') clickFunc();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') againFunc();
});
document.querySelector('.again').addEventListener('click', againFunc);
