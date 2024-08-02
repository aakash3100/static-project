// QUESTION 1

function getKeysAndValues(obj) {
    return Object.entries(obj);
  }
  
  let person = { name: "AAKASH", age: 23 };
  console.log(getKeysAndValues(person)); // Output: [["name", "AAKASH"], ["age", 23]]
  
// QUESTION 2

function toTitleCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(toTitleCase("hello world")); // Output: Hello World


// QUESTION 3

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// Examples
console.log(isEmptyObject({})); // Output: true
console.log(isEmptyObject({ name: "AAKASH" })); // Output: false

// QUESTION 4

function charCount(str) {
  const count = {};
  for (const char of str) {
    count[char] = count[char] ? count[char] + 1 : 1;
  }
  return count;
}
console.log(charCount("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
