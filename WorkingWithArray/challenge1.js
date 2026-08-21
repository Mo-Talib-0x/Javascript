'use strict';

const checkDogs = function (data1, data2) {
  const updatedData1 = data1.slice(1, -2);

  const corrected = updatedData1.concat(data2);

  corrected.forEach((element, i) => {
    if (element >= 3) {
      console.log(`Dog number ${i +1} is an adult, and is ${element} years old`);
    }else{
        console.log(`Dog number ${i +1} is still a puppy 🐶`);
    }
  });
};

const d1 = [3, 5, 2, 12, 7];
const d2 = [4, 1, 15, 8, 3];

checkDogs(d1, d2);

const d3 = [9, 16, 6, 8, 3];
const d4 = [10, 5, 6, 1, 4];

console.log("----next-----");
checkDogs(d3, d4)


