"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italion", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
};

const arr = [3, 5, 7];
const badNewArr = [1, 4, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 4, ...arr];
console.log(goodNewArr);

// for elements individually
console.log(...goodNewArr);

// Creating completely new array (it doesn't manipulate restaurant.mainMenu)
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

/**
 * Difference bw destructuring and spread:
 * Destructuring extracts individual values from data structures into distinct variables, whereas the spread operator unpacks an entire collection of values to copy or merge them into a new container.
 */

// Copy array (Shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets,. NOT objects.

const str = "Talib";
const letters = [...str, " ", "S."];
console.log(letters);
// console.log(...str); // same as writing console.log("T", "a", "l", "i", "b");

// console.log(`${...str}`) // won't work (usually only expected , only we pass into a function or in a new array)

const ingredients = [
  //   prompt("let's make pasta! Ingredient 1?"),
  //   prompt("Ingredient 2?"),
  //   prompt("Ingredient 3?"),
];
console.log(ingredients);

// //Two approach
// restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1991, ...restaurant, founder: "Malik" };
console.log(newRestaurant);

// Shallow copy( copies only top level elements , nested get referenced)
const resttaurantCopy = { ...restaurant };
restaurant.name = "Ristorante Roma";
console.log(resttaurantCopy.name);
console.log(restaurant.name);
