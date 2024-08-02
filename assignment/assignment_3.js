// question 1
// in the below code we are making the first character of every index of array of string to upper case and then
// add the remaining character of that particular string to lower case just to assure that only the first char is capital for this 
// we are using slice method of string
function capitalize(arr) {
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];
      
        const cap = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        arr1.push(cap);
      
    }
    return arr1;
  }
  const words = ["apple", "banana", "cherry"];
  console.log(capitalize(words)); 

// question 2
// in this question our task is to find the 2nd largest element in an array for this we are using sort method
// we are first sorting the array in descending order and then returning the 1st element as the 0th element
// is the greatest element in an array and the element at index 1 is the 2nd largest element
  const arr = [3, 1, 4, 2, ,7,5,44,11];
  function sec_larg(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
  }
  console.log(sec_larg(arr)); 

// question 3
// in the queation we are making an array of object and then we have made a function as get to get the elements from the 
// array of object by the key for this we are using for loop for iterating the entire array of obj
// then we are pushing the value to an array named as val and returning it
  function get(arr, key) {
    const val = [];
    for (let i = 0; i < arr.length; i++) {
      val.push(arr[i][key]);
    }
    return val;
  }

  const obj = [
    {name: "karan", age: 17,roll: 58},
    {name: "goswami", age: 30,roll: 59},
    {name: "krishna", age: 20,roll: 60}
  ];
  const key = "age";
  console.log(get(obj, key));
   
// question 4
// here we have used a user define function named as factorial which is used to calculatet the factorial of a number from a Array
// for this we have used two for loop the upper loop will used for iterating the array from which the element will calculate factorial  
// and the inner for loop to actual calculating thr factorial. the inner for loop will start from 2 to the number ie element from an array
// then we have pushed it into result array
  function factorial(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      let fact = 1;
      
      for (let j = 2; j <= num; j++) {
        fact *= j;
      }
      
      result.push(fact);
    }
    
    return result;
  }
  const num = [20 , 1,2,3];
  console.log(factorial(num));
  

// question 5

// in this question we have made a function in which the num1 and num2 array is passed as Parameter
// here we are first sorting the both array in order to get the intersection then we have used a while loop for iteration over 
// the both array. if the current element of arr1 is greater than 2nd array then we are incrementing the variable j whill thus will point 
// to the next element . if the current element at j is greater than 1st array then we are incrementing the 1st arrray
// if both will not satisfy then the element at both array is same and its the intersection then push that element to the ans array and
// return it and increment both i and j pointer in order to find more intersection from the array if present  

  var norm = function(nums1, nums2) {
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)
    let ans = []
    let i = 0, j = 0
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j])
            j++
        else if (nums1[i] < nums2[j])
            i++
        else {
            ans.push(nums1[i])
            i++
            j++
        }
    }
    return ans
};
let num1 = [1,2,3,4]
let num2 = [3,4,5,6]
console.log(norm(num1,num2));


