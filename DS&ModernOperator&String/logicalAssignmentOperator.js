'use strict'

const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
}

const rest2 = {
    name: 'Capri',
    owner: 'Asif',
}

// // OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// if the numGuest of rest1 would be 0 the output would be {name: 'Capri', numGuests: 10}, which shouldn't be

// so its better to use /**Nullish assignment operator*/
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';


rest1.owner  &&= '<ANONYMOUS>';
rest2.owner  &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);