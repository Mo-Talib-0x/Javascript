'use strict'

// LEC 1

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

// LEC 2

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalisation in name 
const passenger = 'tAlIb'; // Talib
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Output: Talib

// Comparing emails
const email = 'hello@talib.io';
const loginEmail = ' Hello@talib.Io  \n';

// Way 1
const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// Way 2
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);
console.log(email === trimmedEmail);


// Replacing
const priceIN = '234,54rs';
const pricesUS = priceIN.replace('rs','$').replace(',', '.');
console.log(pricesUS);

const announcment = 'All passengers come to boarding door 23, Boarding door 23!';


console.log(announcment.replace('door', 'gate'));

// Same thing with different approach (All occurance)
console.log(announcment.replaceAll('door', 'gate'));
console.log(announcment.replace(/door/g , 'gate'));


// Boolean
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boing'));
console.log(plane1.startsWith('Air'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')){
    console('Part of the new Airbus family');
}

// Practice Exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are not allowed to board');
    }else{
        console.log('Welcome aboard!');
    }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// LEC 3

// Split and join 
console.log('a+vary+nice+string'.split('+')); // Returns array
console.log('Talib Shaikh'.split(' '));

const [firstName, lastName] = 'Talib Shaikh'.split(' ');

const newName =['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);


const CapitalizeName = function(name) {
    const names = name.split(' ');
    const capName = []; 

    for (const n of names){
        // capName.push(n[0].toUpperCase() + n.slice(1));
        capName.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(capName);
    console.log(capName.join(' '));
}
CapitalizeName('sultan ali khan');

// Padding 
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30,'+'));

const maskCreditCard = function(number){
    const str = number + '';  // Number to string conversion
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log((maskCreditCard(20384608723460)));
console.log((maskCreditCard('98709987669845')));

// Repeat

const message2 = 'Bad weather... All Departures Delayed...\n';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(13);