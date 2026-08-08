"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italion", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...restaurant.mainMenu,...restaurant.starterMenu];

// for (const item of menu) console.log(item);

// Old school way
for (const item of menu.entries()) console.log(`${item[0]+1}: ${item[1]}`);

// New way (Destructuring)
for (const [i, el] of menu.entries()) console.log(`${i+1}: ${el}`);

// returns an iterator containing each element as a [key, value] pair.
// console.log(menu.entries());