"use strict";

// What will be the result and why?

console.log("" + 1 + 0);    // 10 (first: "" + 1 = "1", second: "1" + 0 = "10")
console.log("" - 1 + 0);    // -1 (first: "" - 1 = -1, second: -1 + 0 = -1)
console.log(true + false);  // 1 (1 + 0 = 1)
console.log(6 / "3");       // 2 (6 / "3" --> 6 / 3 = 2)
console.log("2" * "3");     // 6 ("2" * "3" --> 2 * 3 = 6)
console.log(4 + 5 + "px");  // 9px (first: 4 + 5 = 9, second: 9 + "px" = "9px")
console.log("$" + 4 + 5);   // $45 (first: "$" + 4 = "$4", second: "$4" + 5 = "45$")
console.log("4" - 2);       // 2 ("4" - 2 --> 4 - 2 = 2)
console.log("4px" - 2);     // Nan ("4px" - 2 --> NaN - 2 = NaN) 
console.log(1 / 0);         // Infinity (Any number greater than 0 divided by 0 is Infinity)
console.log(" -9 " + 5);    // -9 5 (" -9" + 5 --> " -9 5")
console.log(" -9 " - 5);    // -14 (" -9 " - 5 --> -9 - 5 = -14)
console.log(null + 1);      // 1 (0 + 1 = 1)
console.log(undefined + 1); // NaN (Any number is equal to NaN if you add "undefined" to it)