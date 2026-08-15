"use strict";

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE(Immediately Invoked Function Expression0)

(function () {
  console.log("This will never run again");
})();
// Arrow function IIFE
(() => console.log("This will also never run again."))();
