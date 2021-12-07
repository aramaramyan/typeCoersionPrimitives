"use strict";

function myParseInt(str) {
	let result = "";

	if (typeof (str) !== "string") {
		return "The argument of function must be a string!";
	}

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "0"
			|| str[i] === "1"
			|| str[i] === "2"
			|| str[i] === "3"
			|| str[i] === "4"
			|| str[i] === "5"
			|| str[i] === "6"
			|| str[i] === "7"
			|| str[i] === "8"
			|| str[i] === "9") {
			result += str[i];
		} else {
			break;
		}
	}

	if (result.length === 0) {
		return NaN;
	}

	return Number(result);
}

console.log(myParseInt("123"));    // 123
console.log(myParseInt("645.77")); // 645
console.log(myParseInt("abc123")); // NaN
console.log(myParseInt(""));       // NaN