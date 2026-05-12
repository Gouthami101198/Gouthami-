//Looping Statements
// 1. Print Numbers
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Odd Numbers
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 1) {
        console.log( "odd:-", i);
    }
}

// Multiplication Table
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Reverse Counting
let i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}

//Sum of Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Total Sum =", sum);
// output: 55

// Array Loop
let fruits = [ "apple", " banana"," kiwi"," jackfruit"]
for(let c of fruits){
    console.log(c);
    
}
// output: apple banana kiwi jackfruit

//Count Even Numbers
let count = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log("Total even numbers:", count);
// output : 25 

//Star Pattern
for (let k = 1; k <= 5; k++) {
    let stars = "";
    
    for (let l = 1; l <= k; l++) {
        stars += "*";
    }
    
    console.log(stars);
}

//Functions
// Simple Function
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
// output: Welcome to JavaScript


//Function with Parameter
function d (name) {
    console.log("Hello " + name);
}

d ("Gouthami");
// output:  Hello Gouthami

//Add Two Numbers
function add(a, b) {
    return a + b;
}
console.log(add(30, 20));
// output: 50

//Salary Bonus
function totalSalary(salary, bonus) {
    return salary + bonus;
}
let salary = 50000;
let bonus = 5000;
console.log(totalSalary(salary, bonus));
// output: 55000

//Object Loop
let student = {
    name: "Swathi ",
    course: "JavaScript",
    marks: 56
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
// output : name : Swathi 
//course : JavaScript
// marks : 56


//Find Largest Number
function largest(a, b) {
    return a > b ? a : b;
}

console.log(largest(10, 70));
// output: 70 

//Mini Employee Task
// Employee object
let employee = {
    name: "Mani",
    department: "HR",
    salary: 50000
};

// Function to calculate salary after bonus
function salaryAfterBonus(salary, bonus) {
    return salary + bonus;
}

// Print employee details
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);

// Calculate and print salary after bonus
let bonus = 15000;
console.log("Salary after bonus:", salaryAfterBonus(employee.salary, bonus));
// output: 
//Employee Name: Mani
//Department: HR
//Salary: 50000
// Salary after bonus: 65000