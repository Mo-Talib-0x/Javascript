"use strict";

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  header.addEventListener("click", function () {
    if (header.style.color === "red") {
      header.style.color = "blue";
    } else {
      header.style.color = "red";
    }
  });
})();