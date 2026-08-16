"use strict";

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  header.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();


// // Why it is working even after program execution is completed and stack is empty 
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   header.addEventListener("click", function () {
//     if (header.style.color === "red") {
//       header.style.color = "blue";
//     } else {
//       header.style.color = "red";
//     }
//   });
// })();
