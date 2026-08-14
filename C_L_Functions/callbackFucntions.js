'use strict';

const oneWord = function (str){
    return str.replaceAll(' ','').toLowerCase();
};
const upperFirstWord = function (str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`Transformed By: ${fn.name}`);
}

transformer('Python is the best language.',upperFirstWord);

transformer('Python is the best language.',oneWord);


console.log('Hey jonna')
const high5 = function () {
    console.log('👋');
};

document.addEventListener('click', high5);

['Talib', 'Raktim', 'Alok'].forEach(high5);