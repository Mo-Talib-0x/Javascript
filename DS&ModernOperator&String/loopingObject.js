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


// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `

for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);

//Property values
const values = Object.values(openingHours);
console.log(values);


//Entries (Entire Object)
const entries =Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}
