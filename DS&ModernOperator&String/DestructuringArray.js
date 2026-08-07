"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italion", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

// // Destructuring (way 1)
// const arr = [2, 4, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring (Declaring variable with const is considered best practice) (way 2)
// // Original array will not be affected
// const [x, y, z] = arr;
// console.log(x, y, z);


// const[first, second] = restaurant.categories;
// console.log(first, second);

// // if only want the first and third element of the array just put and addition comma(,) at the place of second
// const[first,, second] = restaurant.categories;
// console.log(first, second);



// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables (way 1)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// // Switching variables (way 2)
// [secondary, main] = [main, secondary];

// console.log(main, secondary);


// Recieve 2 return values from a function
// const [starter , main] = restaurant.order(2,0);
// console.log(starter,main);

// // Nested destructuring
// const nested = [2, 5, [1, 8]];
// // const[i, ,j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);


// Default values 
const [p, q, r = 43] = [8, 4];
console.log(p, q, r);
