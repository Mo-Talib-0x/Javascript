'use strict';


// // Refer to object doesn't copy

// const talib = {
//     firstName: 'Mo',
//     lastName: 'Talib',
//     age: 24,
//     family: ['Asif','Mustak','Farid'],
// };

// const harsh = talib;
// harsh.lastName = 'Harsh';
// console.log('Before :', talib);
// console.log('after : ',harsh);



// // Shallow Copy

// const talib1 = {
//     firstName: 'Mo',
//     lastName: 'Talib',
//     age: 24,
//     family: ['Asif','Mustak','Farid'],
// };

// const harsh1 = {...talib1};
// harsh1.lastName = 'Harsh';

// harsh1.family.push('Imran');
// harsh1.family.push('Adil');

// console.log('Before :', talib1);
// console.log('after : ',harsh1);

// // Deep Copy

const talib2 = {
    firstName: 'Mo',
    lastName: 'Talib',
    age: 24,
    family: ['Asif','Mustak','Farid'],
};

const harsh2 = structuredClone(talib2);
harsh2.lastName = 'Harsh';

harsh2.family.push('Imran');
harsh2.family.push('Adil');

console.log('Before :', talib2);
console.log('after : ',harsh2);
