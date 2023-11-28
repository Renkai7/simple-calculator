// DOM
const btnsNumber = document.querySelectorAll(".numButton");
const resultText = document.querySelector("#result");
const clearButton = document.querySelector(".clearButton");
const btnsOperators = document.querySelectorAll(".operatorButton");
const btnCalc = document.querySelector(".calcButton");
const firstNumber = document.querySelector("#firstNumber");
const savedOperator = document.querySelector("#operator");

let num1 = 0;
let num2 = 0;
let operation = "";
let result = 0;
resultText.value = 0;

// Shows number button's values in the result field
const displayNumber = (value) => {
	// Remove default 0 value
	if (resultText.value[0] === "0") {
		resultText.value = "";
	}

	resultText.value += value;
};

const calculateResult = (num1, num2, operation) => {
	if (operation === "+") {
		resultText.value = num1 + num2;
	} else if (operation === "-") {
		resultText.value = num1 - num2;
	} else if (operation === "*") {
		resultText.value = num1 * num2;
	} else if (operation === "/") {
		if (num2 === 0) {
			return alert("Cannot divide by zero.");
		} else {
			resultText.value = num1 / num2;
		}
	} else {
		return alert("Invalid operation.");
	}
};

// Gives each numbered button an event listener
for (let i = 0; i < btnsNumber.length; i++) {
	btnsNumber[i].addEventListener("click", () => {
		displayNumber(btnsNumber[i].textContent);
	});
}

for (let i = 0; i < btnsOperators.length; i++) {
	btnsOperators[i].addEventListener("click", () => {
		num1 = Number(resultText.value);
		operation = btnsOperators[i].textContent;
		firstNumber.textContent = num1;
		savedOperator.textContent = operation;
		resultText.value = 0;
	});
}

btnCalc.addEventListener("click", () => {
	num2 = Number(resultText.value);
	calculateResult(num1, num2, operation);
});

clearButton.addEventListener("click", () => {
	firstNumber.textContent = "";
	savedOperator.textContent = "";
	resultText.value = 0;
});
