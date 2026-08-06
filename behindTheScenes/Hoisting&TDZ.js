"use strict";

//variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Talib";
let job = "Programmer";
const year = 2004;

// functions

console.log(addDecl(5, 2));
// console.log(addArrow(5,2));
// console.log(addExpr(5, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

if (!numbProducts) deleteShoppingCart();

var numbProducts = 10

function deleteShoppingCart(){
    console.log(`All products deleted!`);
}

//variables declared with var , will create a property on the global window object 
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);