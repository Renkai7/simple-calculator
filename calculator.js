const num1 = Number(prompt("Choose the first number"));
const num2 = Number(prompt("Choose the second number"));
const operation = prompt("Choose an operation (+, -, *, /)");

if (typeof num1 != "number" || typeof num2 != "number") {
	alert("Not a number");
} else {
	let result = 0;

	if (operation === "+") {
		result = num1 + num2;
	} else if (operation === "-") {
		result = num1 - num2;
	} else if (operation === "*") {
		result = num1 * num2;
	} else if (operation === "/") {
		if (num2 === 0) {
			alert("Cannot divide by zero.");
		} else {
			result = num1 / num2;
		}
	} else {
		alert("Invalid operation.");
	}

	alert(`Result: ${result}`);
}
