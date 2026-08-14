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

lufthansa.book(239, 'Mo Talib');
lufthansa.book(635, 'Raktim Deb');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

// Does Not work
// book(23, 'Malik')

book.call(eurowings,23, 'Malik');
console.log(eurowings);

book.call(lufthansa, 43, 'Harsh');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 78, 'Rishi');

//Apply method
const flightData = [987, 'Haidar'];

book.apply(swiss, flightData);
console.log(swiss);

// can be done using call 
book.call(swiss, ...flightData);
console.log(swiss);
