'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const body = document.body;
const highscoreEl = document.querySelector('.highscore');


const displayMessage = function(message){
    messageEl.textContent = message;
}

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayMessage("Start guessing...");
    body.style.backgroundColor = '#222';
    scoreEl.textContent = score;
    numberEl.textContent = '?';
    guessEl.value = '';


});


document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(guessEl.value);

    if(!guess){
        displayMessage("🚨 No number");
    }else if (guess === secretNumber){
        displayMessage("✅ Correct Guess!");
        body.style.backgroundColor = '#60b347';
        numberEl.textContent = secretNumber;
        if (score > highscore){
            highscore = score;
            highscoreEl.textContent = highscore;
        }
        

    }else{
        if(score > 1){
            displayMessage((guess > secretNumber) ? '🚨 Too high' : '🚨 Too low');
            score--;
            scoreEl.textContent = score;
        }else{
            displayMessage("❌ Game Over");
            score = 0;
            scoreEl.textContent = score;
        }
    }
});
