const previousDisplay = document.querySelector(".previousDisplay");
const currentDisplay = document.querySelector(".currentDisplay");
const numbers = document.querySelectorAll(".btn-number");
const operations = document.querySelectorAll(".btn-operation");
const deleteLast = document.querySelector(".btn-delete");
const clear = document.querySelector(".btn-all-clear");
const equals = document.querySelector(".btn-equals");

let prevNum = "";
let currentNum = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    currentNum += e.target.innerText;
    currentDisplay.innerText = currentNum;
  });
});
