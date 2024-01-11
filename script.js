'use strict';
console.log(document.querySelector('.message').textContent);

// // //manipulating the DOM element
// // document.querySelector('.number').textContent = 14;
// // console.log(document.querySelector('.number').textContent);

//Note: use value instead of textContent only in the input field otherwise textContent is used mostly

// // in the input field it's different way to manipulate the value
// // document.querySelector('.guess').value = 21;
// // console.log(document.querySelector('.guess').value)

let score = 20;
let highScore = 0;
let ranNumber = Math.trunc(Math.random() * 20) + 1;
console.log(ranNumber);

//refactoring the code, DRY----don't repeat yourself
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// //Handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  }

  //when the guess is wrong
  else if (guess !== ranNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > ranNumber ? 'Too High' : 'Too LOW';

      displayMessage(guess > ranNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === ranNumber) {
    document.querySelector('.number').textContent = ranNumber;
    document.querySelector('.score').textContent = score;
    displayMessage('Hurray you are correct');

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// on clicking AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let ranNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
