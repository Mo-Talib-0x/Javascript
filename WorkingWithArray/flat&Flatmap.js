'use strict';


// FLAT() Method

// Creates a new array with all sub-array elements concatenated into the recursively upto teh specific depth.
const arr = [[1, 2, 3], [4, 5, 6,], 7, 8];
console.log(arr.flat());

// The depth of level specifying how deep a nested array sttructure should be flattened. Defaults to 1.
// flat(depth);

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));