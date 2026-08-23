'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = function (movements){
    return movements.reduce((acc, mov) => acc + mov, 0);
}

console.log(calcDisplayBalance(movements))


const highestNum = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else  return mov;
}, movements[0]);

console.log(highestNum);