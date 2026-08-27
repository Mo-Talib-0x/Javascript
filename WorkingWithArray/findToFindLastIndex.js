'use strict';

// FIND() Mehtod 

// Looks through the array and returns the first item that meets a specific condition you provide. if no item metches, it return undefined
// Skips any empty space int he arrray and doesn't alter the original array.

let array = [-10, -0.20, 0.30, -40, -50];
let array1 = [30, 80, 90, 10, 41, 78];

let found = array.find(function(Elements) {
    return Elements > 0;
})
console.log(found);

// FINDINDEX() Method

// It returns the array element index if any of the elements in the array pass the test, otherwise, it returns -1.

console.log(array1.findIndex(Element => Element % 2 === 1))


// FINDLAST() 
// Iterates the array in reverse order and returns the value of the first element that satisfies the provided testing fucntion.
// If no elements satisfy the testing function, undefined is returned.

const found1 = array1.findLast(Element => Element > 43);
console.log(found1);



// FINDLASTINDEX Method
// Iterates the array in reverse order and returns the index of teh first elemnt that satisfies the provided testing funciton.
// If no elements satisfy the testing function, -1 is returned.

const isLargeNumber = num => num > 80;

console.log(array1.findLastIndex(isLargeNumber));