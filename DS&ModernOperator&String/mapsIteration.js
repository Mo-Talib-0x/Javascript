"use strict";

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

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["Correct", 3],
  [true, "Correct 🎉"],
  [false, "Try agian"],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


console.log(question.get('question'));
for (const [key, value] of question){
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('Correct') === answer));


// Convert map to array;
console.log(...question);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());