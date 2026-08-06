'use strict'

// console.log(this);

const calcAge = function(birthyear){
    console.log(2026 -birthyear);
    console.log(this);
}
// calcAge(2004);

const calcAgeArrow = birthyear => {
    console.log(2026 -birthyear);
    console.log(this);
}
// calcAgeArrow(2004);

const Talib = {
    year : 2004,
    calcAge: function(){
        console.log(this);
        console.log(2026 - this.year)
    },
}
// Talib.calcAge();

const matilda = {
    year: 2015,
}
matilda.calcAge = Talib.calcAge;

matilda.calcAge();

const f = Talib.calcAge;

f();