// Create a function called welcomeUser.
function d (name) {
    console.log(" welcome " + name);
}
d ("Gouthami");
// output: welcome Gouthami

//Create a function squareNumber.
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5));
// output: 25 


// Create an object:
const employee = {
    name: "Gouthami ",
    salary: 50000,

    employeeBonus: function(bonus) {
        console.log(this.name);
        console.log(this.salary + bonus);
    }
};
employee.employeeBonus(5000);
// output: Gouthami 55000


// Scope Checking
function testScope() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a); // Works
    console.log(b); // Works
    console.log(c); // Works
}
testScope();
// Outside the function
//console.log(a); // Error
//console.log(b); // Error
//console.log(c); // Error

// output : 10 20 30 


//Arrow Function
const add = (a, b) => {
    console.log(a + b);
};
add(5, 3);
// output : 8 


//Callback Function
function multiply(a, b) {
    return a * b;
}
function calculator(callback, num1, num2) {
    console.log(callback(num1, num2));
}
calculator(multiply, 5, 2);
//output: 10 


// Generator Function
function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
const offerGenerator = offers();
console.log(offerGenerator.next().value);
console.log(offerGenerator.next().value);
console.log(offerGenerator.next().value);
// output: 50% OFF , Free Delivery ,Cashback

// Default Parameter
function student(name, course = "JavaScript") {
    console.log("Name:", name);
    console.log("Course:", course);
}
student("Gouthami", "Python");
student("swathi");
// output:  Name: , Course: Python ,Name: swathi, Course: JavaScript


// Currying
function multi(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
console.log(multi(2)(3)(4));
// output: 24 


// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let totalarray = [...arr1, ...arr2];
console.log(totalarray);
// output: (6) [1, 2, 3, 4, 5, 6]


//Object Spread
let obj1 = { name: "Navi" };
let obj2 = { role: "Developer" };
let totalObj = { ...obj1, ...obj2 };
console.log(totalObj);
//output:  {name: 'Navi', role: 'Developer'}

// Rest Operator
function numbers(...num) {
    console.log(num); // prints all numbers

    const sum = num.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // prints total sum
}
numbers(1, 2, 3, 4);
// output: 10 

//  Mini Challenge  Student Management System
const students = [];
function addStudent(name, marks) {
    const student = {
        name,
        marks: [...marks], // spread operator
        total: 0
    };
    students.push(student);
}
function calculateMarks(marks, callback) {
    return callback(marks);
}
function sumWithBonus(marks, bonus = 0) {
    return marks.reduce((acc, curr) => acc + curr, 0) + bonus;
}
function addBonus(name, bonus, ...marks) {
    const total = calculateMarks(marks, (m) => sumWithBonus(m, bonus));

    const student = {
        name,
        marks,
        bonus,
        total
    };

    students.push(student);
}
function printStudents() {
    console.log(students);
}
addStudent("Naveen", [80, 90, 85]);
addBonus("Rahul", 10, 70, 75, 80);
printStudents();
// output : [ { name: 'Naveen', marks: [ 80, 90, 85 ], total: 0 }, { name: 'Rahul', marks: [ 70, 75, 80 ], bonus: 10, total: 235 }]