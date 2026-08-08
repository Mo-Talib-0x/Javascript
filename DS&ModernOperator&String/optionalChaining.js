"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //open 24 hours
    close: 24,
  },
  [weekdays[6]]: {
    open: 1,
    close: 22,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italion", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  // ES6 (new way)
  orderPizza(mainIngredient, otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// // if doesn't exist, it will throw error
// console.log(restaurant.openingHours.mon.open);

// Solution for that error
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// Efficient Solution with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // Rewatch
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 2) ?? "Method does not exist");

// the method has no return statement (undefined) therefore the second statement is getting executed
console.log(restaurant.orderPizza?.(4, 2) ?? "Method does not exist");

// Arrays
const user = [
  {
    name: "Talib",
    email: "hello@gmail.com",
  },
];
// Efficient way
console.log(user[0]?.name ?? "User array empty");

// Inefficient way
if (user.length > 0) console.log(user[0].name);
else console.log("user array empty");
