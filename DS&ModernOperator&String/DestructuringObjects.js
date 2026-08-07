"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italion", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },
  // //Destructured way
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, address, time = '20:00'}) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
};

restaurant.orderDelivery({
    time: '22:12',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 2,
})

// // Destructuring with same variable name as object

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Desturing with different variable name 
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 43, c: 73};

// ({a, b} = obj);

// console.log(a, b);

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // Nested with different variable name
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
