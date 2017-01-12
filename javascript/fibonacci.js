// 1, 2, 3, 5, 8
// a, b, c, d, e

// a + b = c
// b + c = d
// c + d = e

// Initialize Variables
var a = 1
var b = 2
var total = 1;

// Initialize array to store fibonacci numbers
var fibonacciNumbers = [];

// Begin loop
while (a < 500) {
	// The basic formula
	var total = a + b;
	// Push numbers into an array
	fibonacciNumbers.push(a);
	// Traverse down the number line
	a = b;
	b = total;
}

// Log the numbers in the console
console.log(fibonacciNumbers);
