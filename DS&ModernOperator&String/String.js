'use strict'

const airline = 'TAP Air India';
const plane = 'B737';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0])

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('A')); // returns first index of occurance
console.log(airline.lastIndexOf('A')); // returns last index of occurance
console.log(airline.indexOf('India'));

// String Slicing
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
    // B AND E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E'){
        console.log(' You got the middle seat 😬')
    }else{
        console.log('You got lucky 😎')
    }
} 
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Talib')); //String {'Talib'}
console.log(typeof new String('Talib'));  // object
console.log(typeof new String('Talib').slice(1));  // string