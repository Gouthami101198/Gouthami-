// Student Registration Form
let studentName = prompt("Enter Student Name: Gouthami");
let department = prompt("Enter Department: BME");
let age = prompt("Enter Age: 25");
console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);
// output : Welcome Gouthami  Department: BME  Age: 25


// ATM Withdrawal System
let balance = 10000;
let amount = Number(prompt("Enter withdrawal amount:"));
if (amount >= 100 && amount <= balance) {
    console.log("Transaction Successful");
} else if (amount < 100) {
    console.log("Minimum withdrawal amount is 100");
} else {
    console.log("Insufficient Balance");
}
// output : Enter withdrawal amount: 5000 Transaction Successful


// Swiggy Discount Checker
let orderAmount = Number(prompt("Enter order amount:"));
let result = orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied";
console.log(result);
// output : Enter order amount: 600 Free Delivery Available


// Instagram Login System
let username = prompt("Enter username:");
if (username === "admin") {
    let password = prompt("Enter password:");

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid Username");
}
// output: Enter username: admin Enter password: 1234 Login Success


// Traffic Signal System
let signal = prompt("Enter signal color (red / yellow / green):");
switch (signal) {
    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}
// output: Enter signal color: red STOP

// Employee Salary Calculator
function salaryCalculation(basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;
    return totalSalary;
}
let result = salaryCalculation(25000, 5000);
console.log(result);
// output: 30000

// E-Commerce Cart Total
let prices = [100, 200, 300, 400];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}
let average = total / prices.length;
console.log("Total Price:", total);
console.log("Average Price:", average);
// output: Total Price: 1000 Average Price: 250


// WhatsApp Contact Book
let contact = {
    name: "Naveen",
    phone: "9876543210",
    status: "Online"
};
for (let key in contact) {
    console.log(key + " : " + contact[key]);
}
// output: name : Naveen phone : 9876543210 status : Online 

// Movie Ticket Booking
function payment() {
    console.log("Payment Successful");
}
function bookTicket(callback) {
    console.log("Ticket Booked Successfully");
    callback();
}
bookTicket(payment);
// output: Ticket Booked Successfully Payment Successful


// Food Delivery Time Tracker
function* orderTracker() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}
let order = orderTracker();
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);

// output: Order Confirmed Preparing Food Out for Delivery Delivered