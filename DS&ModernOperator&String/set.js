"use strict";

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pasta",
  "Risotto",
  "Pasta",
  "Pizza",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);

console.log(new Set("Talib"));

// Methods (has, add, delete, clear)
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
console.log(orderSet);
orderSet.delete("Pizza");
// orderSet.clear();  // Deletes all element of set (leaves empty set)
// console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

console.log(new Set(staff));

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size,
);

console.log(new Set("TalibShaikh").size);

const italianFoods = new Set([
  "Pasta",
  "Gnocchi",
  "Tomatoes",
  "Olive Oil",
  "Garlic",
  "Basil",
]);

const mexicanFoods = new Set([
  "Tortillas",
  "Beans",
  "Rice",
  "Tomatoes",
  "Avocado",
  "Garlic",
]);

// Intersection Method
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log("Intersection:", commonFoods);
console.log(...commonFoods);

// Union Method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("Union:", italianMexicanFusion);

// OR

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// Difference Method
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

// Symmetric Difference
const uniqueItalianAndMexican = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexican);

console.log(italianFoods.isDisjointFrom(mexicanFoods));