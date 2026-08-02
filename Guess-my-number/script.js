'use strict'

// console.log(document.querySelector('message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value =23;

// console.log(document.querySelector('.guess').value);

// console.log(document.body);
// console.dir(document.body.childNodes);

// let message =document.getElementById("message");

// console.log(message);

// let label = document.getElementsByClassName("label-score");

// console.log(label);


// let firstEl = document.querySelector("p");   // returns first element.
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");   // returns all element.
// console.dir(allEl);

// let selCls = document.querySelector(".label-score");
// console.dir(selCls);

// let selClsAll = document.querySelectorAll(".label-score");
// console.dir(selClsAll);

// let div = document.querySelector("div");
// console.dir(div);

// document.querySelector('.score').textContent = 234;

// document.querySelector('.number').textContent = 34;

// document.querySelector('.guess').value = 43;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //When there is no input
    if (!guess) {
        displayMessage('🚨 No number!');
        //When player wins
    }else if (guess === secretNumber){
        displayMessage('✅ Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if(guess != secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('🚨 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    //     //When guess is too high
    // else if (guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = "🚨 You lost the game!"
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    //     //When guess is too low
    // }else if (guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = "🚨 You lost the game!"
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});

