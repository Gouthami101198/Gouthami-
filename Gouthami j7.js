// API Task - User Names Uppercase
// API URL
const apiUrl = "https://jsonplaceholder.typicode.com/users";
// Fetch all users
fetch(apiUrl)
  .then(response => response.json())
  .then(users => {
    // Convert all usernames to UPPERCASE using map()
    const upperCaseUsernames = users.map(user => user.username.toUpperCase());

    // Print new array
    console.log(upperCaseUsernames);
  })
  .catch(error => {
    console.error("Error fetching users:", error);
  });
  // output: 
(10) ['BRET', 'ANTONETTE', 'SAMANTHA', 'KARIANNE', 'KAMREN', 'LEOPOLDO_CORKERY', 'ELWYN.SKILES', 'MAXIME_NIENOW', 'DELPHINE', 'MORIAH.STANTON']



//API Task - Expensive Products
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    const expensiveProducts = products.filter(product => product.price > 100);
    expensiveProducts.forEach(product => {
      console.log(product.title, "-", product.price);
    });

  });

// output:  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - 109.95
//John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet - 695
//Solid Gold Petite Micropave  - 168
//SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s - 109
//Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5 - 109
//WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive - 114
//Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin - 599
//Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED  - 999.99





//Date Concept Task - Digital Clock
// Create Date object
const currentDate = new Date();
// Get current hours, minutes, and seconds
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
// Print time
console.log(hours + " : " + minutes + " : " + seconds);
// output: 2 : 35 : 22 


//String Concept Task - Username Checker
// Create string
let name = " Naveen Kumar ";
// Remove spaces using trim()
let trimmedName = name.trim();
// Convert into uppercase
let upperCaseName = trimmedName.toUpperCase();
// Check if string includes "KUMAR"
let check = upperCaseName.includes("KUMAR");
// Print final output
console.log(upperCaseName);
console.log(check);
// output:  NAVEEN KUMAR true


// Array Concept Task - Student Rank System
// Create array
let marks = [450, 300, 700, 200, 900];
// Sort marks from high to low
marks.sort((a, b) => b - a);
// Get top 3 marks using slice()
let topMarks = marks.slice(0, 3);
// Print result
console.log(topMarks);
// output:  (3) [900, 700, 450]