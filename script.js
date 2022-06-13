const previousDisplay = document.querySelector(".previousDisplay");
const currentDisplay = document.querySelector(".currentDisplay");
const numbers = document.querySelectorAll(".btn-number");
const operations = document.querySelectorAll(".btn-operation");
const deleteLast = document.querySelector(".btn-delete");
const clear = document.querySelector(".btn-clear");
const equals = document.querySelector(".btn-equals");

let prevNum = "";
let currentNum = "";
let appendDot = false;
let result = null;
let calculation = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !appendDot) {
      appendDot = true;
    } else if (e.target.innerText === "." && appendDot) {
      return;
    }
    if (e.target.innerText === "0" && currentNum === "0") return;
    currentNum += e.target.innerText;
    currentDisplay.innerText = currentNum;
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!currentNum) return;
    appendDot = false;
    const operationType = e.target.innerText;
    if (prevNum && currentNum && calculation) {
      computation();
    } else {
      result = parseFloat(currentNum);
    }
    clearDigit(operationType);
    calculation = operationType;
  });
});

function clearDigit(type = "") {
  prevNum += currentNum + " " + type + " ";
  previousDisplay.innerHTML = prevNum;
  currentDisplay.innerHTML = "";
  currentNum = "";
  previousDisplay.innerHTML = result;
}

function computation() {
  if (calculation === "+") {
    result = parseFloat(result) + parseFloat(currentNum);
  } else if (calculation === "-") {
    result = parseFloat(result) - parseFloat(currentNum);
  } else if (calculation === "X") {
    if (parseFloat(result) === "0" || parseFloat(currentNum) === "0") {
      result = "0";
    } else {
      result = parseFloat(result) * parseFloat(currentNum);
    }
  } else if (calculation === "/") {
    if (parseFloat(currentNum) == "0") {
      alert("infinity");
      result = " ";
    } else {
      result = parseFloat(result) / parseFloat(currentNum);
    }
  }
  result = result.toFixed(6);
}

equals.addEventListener("click", () => {
  if (!prevNum || !currentNum) return;
  appendDot = false;
  computation();
  clearDigit();
  currentDisplay.innerText = result;
  currentNum = result;
  prevNum = "";
});

clear.addEventListener("click", () => {
  prevNum = "";
  currentNum = "";
  previousDisplay.innerText = "";
  currentDisplay.innerText = "";
  result = "";
});

deleteLast.addEventListener("click", () => {
  currentDisplay.innerText = currentDisplay.innerText.slice(0, -1);
  currentNum = currentDisplay.innerText;
});
