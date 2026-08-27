'use strict';

// SOME() Method

// Returns true if it finds an element in the array that satisfies the provided testing function.
// Otherwise, returns false

const array = [23, 342, 55, 48, 23];

const even = mov => mov % 2 === 0;

console.log(array.some(even));

// EVERY() Method

// Returns false if it finds an element in the array that does not satisfy the provided testing function.
// Otherwise, returns true

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 38, 13];

console.log(array1.every(isBelowThreshold));