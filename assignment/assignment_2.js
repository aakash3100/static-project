// Question 1: Multiplication Table Generator
// Generate and print a multiplication table for numbers from 1 to 10
console.log('Multiplication Table:');
for (let i = 1; i <= 10; i++) {
    let row = ''; // Initialize an empty string for the row
    for (let j = 1; j <= 10; j++) {
        row += (i * j).toString(); // Add each multiplication result to the row
    }
    console.log(row); // Print the row
}
console.log('\n'); // Line break for separation

// Question 2: Sum of Numbers in an Array
// Calculate the sum of all numbers in a given array
let numbers = [5, 10, 15, 20, 25]; // Initialize the array with at least 5 numbers
let sum = 0; // Initialize the sum variable

for (let number of numbers) {
    sum += number; // Add each number to the sum
}

console.log('Sum of array numbers:', sum); // Print the sum
console.log('\n'); // Line break for separation

// Question 3: Palindrome Checker
// Function to check if a given string is a palindrome
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join(''); // Reverse the string
    return str === reversedStr; // Compare the original string with the reversed string
}

// Test the palindrome function
console.log('Palindrome Check for "LEVEL":', isPalindrome('LEVEL')); // true
console.log('\n'); // Line break for separation

// Question 4: Fibonacci Sequence Generator
// Function to generate the first n numbers of the Fibonacci sequence
function generateFibonacci(n) {
    let fibSequence = []; // Initialize an empty array for the sequence
    if (n > 0) fibSequence.push(0); // Add the first Fibonacci number if n > 0
    if (n > 1) fibSequence.push(1); // Add the second Fibonacci number if n > 1
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]); // Calculate and add the next Fibonacci number
    }
    return fibSequence; // Return the sequence
}

// Test the Fibonacci function
console.log('First 10 Fibonacci numbers:', generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log('\n'); // Line break for separation

// Question 5: Block Scope with Let and Const
// Function to demonstrate the difference between block scope and function scope
function Demo() {
    if (true) {
        var varVariable = 'I am a var variable'; // var is function-scoped
        let letVariable = 'I am a let variable'; // let is block-scoped
        const constVariable = 'I am a const variable'; // const is block-scoped

        // Inside the block, all variables are accessible
        console.log('Inside block:');
        console.log(varVariable); // Accessible
        console.log(letVariable); // Accessible
        console.log(constVariable); // Accessible
    }
    
    // Outside the block, only the var variable is accessible
    console.log('\nOutside block:');
    console.log(varVariable); // Accessible
    // The following lines will cause errors because let and const are not accessible outside the block
    // console.log(letVariable); // Unaccessible
    // console.log(constVariable); // Unaccessible
}

// Run the scope demo
Demo();