'use strict';

const greet = function(greeting){
    return function (name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Sameer');
greeterHey('Talib');

greet('Hello')('Asif');


// Using Arrow function;

// // use return only when enclosing body with curly braces {}
// const greet = (greeting) => {
//     return (name) =>{
//         console.log(`${greeting} ${name}`);
//     }
// }

// // Omit return when writing single- line expression
const greet1 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey1 = greet1('Hey');
greeterHey1('Sameer');
greeterHey1('Talib');

greet1('Hello')('Asif');