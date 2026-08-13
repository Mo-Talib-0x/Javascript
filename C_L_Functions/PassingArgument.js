'use strict';

const flight = 'LH234';
const talib = {
    name: 'Mo Talib',
    passport: 239832493
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 239832493){
        alert('Checked In');
    }else{
        alert('Wrong passport');
    }
}

checkIn(flight, talib);
console.log(flight);
console.log(talib);

// Is same as doing ...
const flightNum = flight;
const passenger = talib;

const newPassport = function ( person){
    person.passport = Math.trunc(Math.random() * 1000000000);
}
newPassport(talib);
checkIn(flight,talib); //(will return wrong cause newPassport function has changed the passport)

// Passing by value.
// Passing by reference (javascript doesn't have it)