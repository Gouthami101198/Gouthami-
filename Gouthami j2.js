// Write the output and datatype for below:
console.log("10" + 5)
// output : 105  string 
console.log(10 + true)
// output : 11  number 
console.log(false + null)
// output : 0 number 
console.log("Hello" + undefined)
// output: Helloundefined  string 
console.log([1,2] + 5)
// outpit : 1,25 string 

// String + Number
let a = "Age: " + 25;
console.log(a);          // "Age: 25"
console.log(typeof a);   // string
// Boolean + Number
let b = true + 10;
console.log(b);          // 11
console.log(typeof b);   // number
// Array + String
let c = [1, 2, 3] + " is an array";
console.log(c);          // "1,2,3 is an array"
console.log(typeof c);   // string
// Object + Number
let d = {} + 5;
console.log(d);          // "[object Object]5"
console.log(typeof d);   // string
// Null + Number
let e = null + 20;
console.log(e);          // 20
console.log(typeof e);   // number


// Explicit Type Casting using Number()
console.log(Number("500"));   // 500
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0
console.log(Number("abc"));   // NaN
console.log(Number([100]));   // 100


// Checking truthy and falsy values using Boolean()
console.log(Boolean(""));            // false
console.log(Boolean("javascript"));  // true
console.log(Boolean(0));             // false
console.log(Boolean(1));             // true
console.log(Boolean(null));          // false
console.log(Boolean(undefined));     // false
console.log(Boolean([]));            // true
console.log(Boolean({}));            // true

//Student Pass or Fail
// Take one variabl
let mark = 25;
if (mark > 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// output : fail 


//Voting Eligibility
// Create a variable:
let age = 20;
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
// output : eligible 

//Greatest Number
// Find greatest among 3 numbers using if else if.
let a = 50;
let b = 80;
let c = 30;
if (a > b && a > c) {
    console.log("A is greatest");
} else if (b > a && b > c) {
    console.log("B is greatest");
} else {
    console.log("C is greatest");
}
// output : B is gretest 


//Traffic Light System
// Using switch statement:

let signal = "red";
switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}
output : stop 

//Login System
// Create variables:

let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Login");
    }
} else {
    console.log("Invalid Login");
}
output: Loginsuccess 


//Session Finder
//Take hour value:
let hour = 14;
if (hour >= 1 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
} else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
} else if (hour >= 20 && hour <= 24) {
    console.log("Night");
} else {
    console.log("check time ");
}
// output : Afternoon 


// Bonus Challenge 
// 1
console.log(true + true)
// Output: 2
// Boolean true = 1, so 1 + 1 = 2

// 2
console.log("5" - 2)
// Output: 3
// "5" converted to number 5, 5 - 2 = 3

// 3
console.log("5" + 2)
// Output: "52"
// String concatenation

// 4
console.log(null + 1)
// Output: 1
// null becomes 0, so 0 + 1 = 1

// 5
console.log(undefined + 1)
// Output: NaN
// undefined cannot be converted to a valid number

// 6
console.log(Boolean(" "))
// Output: true
// Space string is non-empty → truthy

// 7
console.log(Number(true))
// Output: 1
// true converts to 1