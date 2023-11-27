const getNumberInput = (promptMessage) => {
	return Number(prompt(promptMessage));
};

const getOperationInput = () => {
	const operator = prompt("Choose an operation (+, -, *, /)");
	return operator;
};

const isValidNumber = (num) => {
	if (isNaN(num)) {
		return false;
	}

	return true;
};

const calculateResult = (num1, num2, operation) => {
	if (operation === "+") {
		return num1 + num2;
	} else if (operation === "-") {
		return num1 - num2;
	} else if (operation === "*") {
		return num1 * num2;
	} else if (operation === "/") {
		if (num2 === 0) {
			return alert("Cannot divide by zero.");
		} else {
			return num1 / num2;
		}
	} else {
		return alert("Invalid operation.");
	}
};

const displayResult = (result) => {
	return alert(`Result: ${result}`);
};

const main = () => {
	const num1 = getNumberInput("Choose the first number");
	const num2 = getNumberInput("Choose the second number");
	const operation = getOperationInput();

	if (isValidNumber(num1) && isValidNumber(num2)) {
		const result = calculateResult(num1, num2, operation);
		displayResult(result);
	} else {
		alert("Not a number");
	}
};

// main();

// DOM
const btnsNumber = document.querySelectorAll(".numButton");
const resultText = document.querySelector("#result");
const displayNumber = (value) => {
	resultText.value += value;
};
for (let i = 0; i < btnsNumber.length; i++) {
	btnsNumber[i].addEventListener("click", () => {
		displayNumber(btnsNumber[i].textContent);
		console.log(btnsNumber[i].textContent);
		console.log(typeof btnsNumber[i].textContent);
	});
}
