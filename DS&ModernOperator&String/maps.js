"use strict ";

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze Italy");
console.log(rest.set(2, "Lisbon,Portugal"));

// The key in the map can be of any datatype
// Methods(set, get, has, size, delete)
// Calling set method returns updated map
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Orgain"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);

rest.set([2, 4], "Test");
console.log(rest);
console.log(rest.get([2, 4])); // undefined both the array are at difference location in heap
// this will work cause arr has reference of array which is on the same location in the memory;
const arr = [2, 4];
rest.set(arr, "Test");
console.log(rest);
console.log(rest.get(arr));

// document query

rest.set(document.querySelector("body"), "Body");
console.log(rest);
