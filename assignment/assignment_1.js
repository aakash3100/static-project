
//QUESTION 1
//
// Declare variables of different data types
var myString = "Hello, World!";
 // number
var myNumber = 99;
// boolean
var myBoolean = false; 
// object
var myObject = { name: "aakash", age: 17 }; 
// array
var arr = [1, 2, 3, 4, 5]; 

// Log the value and type of each variable to the console
console.log(myString, typeof myString);
console.log(myNumber, typeof myNumber);
console.log(myBoolean, typeof myBoolean);
console.log(myObject, typeof myObject);
console.log(arr, typeof arr);


//QUESTION 2
 //Prompts the user to enter the first number
let num1 = parseFloat(prompt("Enter the first number:")); 
 // Prompts the user to enter the second number
 let num2 = parseFloat(prompt("Enter the second number:"));
 //perform arithmetic operator 
let addition = num1 + num2;  
let subtraction = num1 - num2; 
let multiplication = num1 * num2;
let division = num1 / num2;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);

// Question 3: Conditional Statements
let number = parseFloat(prompt("Enter a number:")); // prompt user to enter the number 

if (number > 0) {
    console.log("The number is positive."); // if the number is greater the above statement will positive
} else if (number < 0) {
    console.log("The number is negative.");  // if the above statement is false than the number is <0 so it will be negative
} else {
    console.log("The number is zero.");   // none of the condition is true statement will zero
}

// Question 4: Control Flow Keywords
let i =1;
for (i = 1; i <= 20; i++) {  // for loop that starts at 1 and increments  until it reaches 20.
    if (i % 2 !== 0) {    // check it odd or even condition
        continue;
    }
    console.log(i);
}

// Question 5: Combining Concepts
let grade = parseFloat(prompt("Enter a numeric grade (0-100):"));
let letterGrade;   

if (grade >= 90 && grade <= 100) {      // in this following statement if ,else if condition where used to check which statemnet is true or false 
    letterGrade = 'A';
} else if (grade >= 80 && grade <= 89) {
    letterGrade = 'B';
} else if (grade >= 70 && grade <= 79) {
    letterGrade = 'C';
} else if (grade >= 60 && grade <= 69) {
    letterGrade = 'D';
} else if (grade >= 0 && grade <= 59) {
    letterGrade = 'F';
} else {
    letterGrade = 'Invalid grade';
}

console.log("The letter grade is:", letterGrade);