'use strict';

// // let arr = new Array();

// // console.log(arr.length);

// // arr[0] = 55;
// // arr[1] = 54;
// // arr[2] = 98;
// // arr[3] = 512;
// // arr[4] = 88;
// // arr[5] = 11;
// // arr[6] = [84,23,99,3,798];
// // arr[7] = [84,23,99,3,798];

// // console.log(arr[0])
// // console.log(arr[1])
// // console.log(arr[2])
// // console.log(arr[3])
// // console.log(arr[4])
// // console.log(arr[5])
// // console.log(arr.length);

// // console.log(arr.at(-1));
// // console.log(arr.indexOf(511));

// // arr.length = 7;
// // console.log(arr)

// // console.log(arr[6][3]);


// const fruits = ['apple', 'banana'];

// fruits.push('mango','orange','guava', 'papaya');
// console.log(fruits);

// // console.log(fruits.pop());
// // console.log(fruits.shift());
// // console.log(fruits[0]);
// // console.log(fruits.unshift(10));
// // console.log(fruits[0]);

// // console.log(fruits.slice(1,4));
// // // slice with no argument creates a shallow copy.
// // console.log(fruits.slice())


// // array.splice(startIndex, deleteCount, item2, ..., itemN);

// // Removing elements
// console.log(fruits.splice(1,4));

// // Adding elements
// console.log(fruits.splice(1,0,'strawberry', 'watermelon'));

// console.log(fruits);
// // Replacing elements 
// console.log(fruits.splice(1,2, 'Kiwi', 'pineapple'))
// console.log(fruits);

// // Adding and removing last element of the array 
// console.log(fruits.splice(fruits.length - 1, 1))
// console.log(fruits);

// console.log(fruits.splice(fruits.length , 0, 'Dates'));
// console.log(fruits);

// console.log(fruits.includes('Kiwi', 'Dates'));

// Iteration and functional method 

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

const values = coding.forEach((item) => {
    console.log(item);
    // return item;
});

console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num)=> num > 4);

// // OR 

// const newNums = myNums.filter((num)=> {
//     num > 4;
//     return num;
// });

// console.log(newNums);
const newNumArr = [];

myNums.forEach((num) => {
    if(num > 4){
        newNumArr.push(num);
    }
})
console.log(newNumArr);


