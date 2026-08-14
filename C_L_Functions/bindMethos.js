'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}


const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(32, 'Asif');
console.log(eurowings)

// Partial application (23 already defined)
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Fardeen');
bookEW23('Nasir');

// With event listeners 
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this)

    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate ;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(23));


const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

