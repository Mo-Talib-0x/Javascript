

/////////////////////////////////////////////////

//for (const movement of movements){
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdraw ${Math.abs(movement)}`);
  }
}

console.log('----FOREACH-----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i} You withdraw ${Math.abs(mov)}`);
  }
});