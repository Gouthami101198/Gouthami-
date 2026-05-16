//Student Attendance System
// Create two arrays
let presentStudents = ["Arun", "Priya", "Kavin"];
let absentStudents = ["Meena", "Rahul"];
// Merge both arrays using spread operator
let allStudents = [...presentStudents, ...absentStudents];
// Add one new student at last
allStudents.push("Sneha");
// Print final array
console.log("Final Student List:");
console.log(allStudents);
// output:  Final Student List:
// (6) ['Arun', 'Priya', 'Kavin', 'Meena', 'Rahul', 'Sneha']

//E-Commerce Cart
// Create object for mobile details
let mobile = {
  brand: "Samsung",
  model: "Galaxy S24",
  price: 65000
};
// Create another object for charger details
let charger = {
  type: "Fast Charger",
  watt: 45,
  price: 2000
};
// Merge both objects using spread operator
let cartItem = {
  ...mobile,
  ...charger
};
// Add deliveryDate property
cartItem.deliveryDate = "20-May-2026";
// Print final object
console.log("Final Cart Object:");
console.log(cartItem);
// output: Final Cart Object:{
// brand: 'Samsung',
  //model: 'Galaxy S24',
 // price: 2000,
 // type: 'Fast Charger',
 // watt: 45,
 // deliveryDate: '20-May-2026'
//}


// Food Delivery App
// Create function named orderFood()
function orderFood(...items) {
 
  // Print total items ordered
  console.log("Total items ordered:", items.length);

  // Print first item
  console.log("First item:", items[0]);

  // Print last item
  console.log("Last item:", items[items.length - 1]);
}
// Function call
orderFood("Pizza", "Burger", "Pasta", "Ice Cream");
// output:  Total items ordered: 4
//First item: Pizza
// Last item: Ice Cream


// Employee Salary Filter
// Create array of employee objects
let employees = [
  { name: "Arun", salary: 45000 },
  { name: "Priya", salary: 60000 },
  { name: "Kavin", salary: 75000 },
  { name: "Meena", salary: 50000 }
];
// Filter employees whose salary is above 50000
let highSalaryEmployees = employees.filter(employee => employee.salary > 50000);
// Print filtered employees
console.log("Employees with salary above 50000:");
console.log(highSalaryEmployees);
// output: Employees with salary above 50000:
//[
  //{ name: 'Priya', salary: 60000 },
  //{ name: 'Kavin', salary: 75000 }
//]


// Online Game Score Board
// Create array of scores
let scores = [120, 150, 200, 180, 100];
// Use reduce() to find total score
let totalScore = scores.reduce((total, score) => total + score, 0);
// Print final total
console.log("Total Score of All Players:", totalScore);
// output:  Total Score of All Players: 750