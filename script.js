'use strict';

// TODO 📉 Too low!
// TODO 📈 Too high!
// TODO 🎉 Correct number!
// TODO score by2l b wa7d f kol mara
// TODO awl ma bgyb el rakam s7 byb2a da el highscore
let answer = Math.round(Math.random() * 20) + 1;
let checkButton = document.querySelector('.check');
let againButton = document.querySelector('.again');
let valueInBox = document.querySelector('.guess');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let bodyElement = document.getElementsByTagName('BODY')[0];

let clickFunc = function () {
  let value = valueInBox.value;
  if (answer == value) {
    console.log('🎉 Correct number!');
    message.textContent = '🎉 Correct number!';
    highscore.textContent = score.textContent;
    bodyElement.style.backgroundColor = 'green';
    return;
  } else if (value > answer) {
    message.textContent = '📉 Too high!';
    console.log('📉 Too high!');
  } else {
    message.textContent = '📈 Too low!';
    console.log('📈 Too low!');
  }
  score.textContent = Number(score.textContent) - 1;
};

let againFunc = function () {
  message.textContent = 'Start guessing...';
  score.textContent = 20;
  valueInBox.value = '';
  bodyElement.style.backgroundColor = '#222';
};

console.log(answer);

againButton.addEventListener('click', againFunc);
checkButton.addEventListener('click', clickFunc);
