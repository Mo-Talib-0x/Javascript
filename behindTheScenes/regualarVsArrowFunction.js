"use strict";

const talib = {
  firstName: "Talib",
  lastName: "Shaikh",
  birthYear: 2004,

  calcAge: function () {
    console.log(2026 - this.birthYear);

    const self = this;
    function showName() {
      console.log(self.firstName);
    }
    showName();

    const showBirth = () => {
      console.log(this);
      console.log(this.birthYear);
    };
    showBirth();
  },
  greet: () => {
    console.log(this);
    console.log(this.firstName);
  },
};

// talib.calcAge();
// talib.greet();
// console.log(this.firstName);

// Arguments keyword

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};
// addExp(5, 3);
// addExp(5, 3, 5, 5, 6, 2);

const addArrow = (a, b) => {
  console.log(arguments); //not available
  return a + b;
};
addArrow(5, 7);
// addArrow(5, 3, 5, 5, 6, 2); 



// // var firstName = 'matilda'

// const talib = {
//   firstName: "Talib",
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2026 - this.year);

//     // Solution 1
//     // const self = this; //self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1991 && self.year <= 1996);
//     // };

//     // Solution 2

//     const isMillenial = function () {
//       console.log(this);
//       console.log(self.year >= 1991 && self.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// // talib.greet();
// // console.log(this.firstName);
// talib.calcAge();
