var a = 10;
a = 15;
console.log(a);
// output : 15

// What happens here?
let b = 20;
let b = 30;
// output : SyntaxError let does not allow redeclaration

const c = 50;
console.log(c)
// output : 50 

const x = 10;
x = 20
console.log(x);
// output : uncaught type error

var p = 5;
var p = 10;
console.log(p);
// output : 10 

let q = 25;
q = q + 10;
console.log(q);
// output : 35

const r = 7;
console.log(r + 3);
//output: 10

//.Fill correct keyword:
___ a = 10
 // output : let a =10 

//Which method prints normal output?
console.log()

// Which method shows warning?
console.warn()

// Which method shows error?
console.error()

// What does this do?
console.clear();
// It removes all previous messages (logs, warnings, errors) from the console view

let a = "hello";
console.log(typeof a);
// output: string 

let b = 100;
console.log(typeof b);
//output :  number

let c = false;
console.log(typeof c);
// output : boolean

let d;
console.log(d);
// undefined

//What is type of null?
// output : "object"

//Convert string to number:
"25"
//  output: Number("25") // 25

// Create array of 3 fruits.
// output : 
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

let arr = ["a","b","c"];
console.log(arr[1]);
//output: b 

 let arr = ["x","y","z"];
 console.log(arr[arr.length-1]);
// output : z

// How to get first element?
let arr = ["x", "y", "z"];
console.log(arr[0]);

 let arr = ["apple","banana"];
console.log(arr.length);
// output : 2 

// Add new element to array
let arr = ["apple", "banana"];
arr[arr.length] = "orange";
console.log(arr);


//Create object with name & age.
//Output
const person = {
  name: "John",
  age: 25
};

console.log(person);
let obj = {name:"Naveen"};
console.log(obj.name);
// output : Naveen 

let obj = {
fruits: ["apple","banana"]
};
console.log(obj.fruits[1]);
// output : banana

// How to access last element inside object array
let fruitsDetails 
{
    redfruits: ["apple", "cherry" ]
    yellowfruits : ["banana", " pineapple"]
}
console.log(fruitsDetails.redfruits[1]);

console.log(5 + 3);
//output :8 

console.log(10 % 3);
//output: 1

console.log(2 ** 3);
//output : 8

console.log(10 / 2);
5

let a = 5;
a++;
console.log(a);
// output: 6 

let b = 5;
let c = b++;
console.log(b, c);
// output : 6 5 

let x = 5;
let y = ++x;
console.log(x, y);
//output : 6 6 

let m = 3;
let n = m--;
console.log(m, n);
// output: 2 3 

console.log(5 == "5");
// output : true

console.log(5 === "5");
// output : false 

console.log(true && false || true);
// output : true 

5 > 3 ? console.log("Yes") : console.log("No");
// output : yes 