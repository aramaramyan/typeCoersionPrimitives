"use strict";

// Write logic that implements parseFloat.

function myParseFloat(str) {
	let result = "",
		dotCount = 0;

	if (typeof (str) !== "string") {
		return "The argument of function must be a string!";
	}

	for (let i = 0; i < str.length; i++) {
		if ((str[i] === "0"
			|| str[i] === "1"
			|| str[i] === "2"
			|| str[i] === "3"
			|| str[i] === "4"
			|| str[i] === "5"
			|| str[i] === "6"
			|| str[i] === "7"
			|| str[i] === "8"
			|| str[i] === "9"
			|| str[i] === ".")) {

			if (str[i] === ".") {
				dotCount++;
			}

			if (dotCount !== 2) {
				result += str[i];
			} else {
				break;
			}

		} else {
			break;
		}
	}

	if (result.length === 0) {
		return NaN;
	}

	return Number(result);
}

console.log(myParseFloat("123.45"));    // 123.45
console.log(myParseFloat("534.59.08")); // 534.59
console.log(myParseFloat("230.005px")); // 230.005
console.log(myParseFloat("def746"));    // NaN