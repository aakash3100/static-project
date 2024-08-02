//question 1:
function adder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add = adder(5);
  console.log(add(3)); // Output: 8
  console.log(add(10)); // Output: 15
  
  //question 2:
  function track() {
    let count = 0; // Variable to keep track of the number of calls
  
    return function() {
      count++; // Increment the call count each time the function is called
      return count; // Return the current call count
    };
  }
  
  const tracker = track();
  console.log(tracker()); // Output: 1
  console.log(tracker()); // Output: 2
  console.log(tracker()); // Output: 3
  //Question 3
function Rectangle(width,height) {
    this.width = width;
    this.height = height;
  }
  // Prototype method to calculate the area
  Rectangle.prototype.area = function() {
    return this.width * this.height;
  };
  
  const rect2 = new Rectangle(7, 3);
  console.log(rect2.area()); // Output: 21
  
   //question 4
function Circle(radius) {
    this.radius = radius;
  }
  
  // Prototype method to calculate the area of the circle
  Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius; // Calculate and return the area
  };
  
  // Prototype method to calculate the perimeter (circumference) of the circle
  Circle.prototype.perimeter = function() {
    return 2 * Math.PI * this.radius; // Calculate and return the perimeter
  };
  
  const circle2 = new Circle(3);
  console.log(circle2.area()); // Output: 28.274333882308138 
  console.log(circle2.perimeter()); // Output: 18.84955592153876 
   //question 5

   function Counter() {
    let counter = 0; // Private counter variable
  
    return {
      // Function to increment the counter
      increment: function() {
        counter++;
      },
      // Function to decrement the counter
      decrement: function() {
        counter--;
      },
      // Function to reset the counter to 0
      reset: function() {
        counter = 0;
      },
      // Function to get the current value of the counter
      Value: function() {
        return counter;
      }
    };
  }
  
  const count =Counter();
  
  count.increment();
  console.log(count.Value()); // Output: 1
  
  count.increment();
  console.log(count.Value()); // Output: 2
  
  count.decrement();
  console.log(count.Value()); // Output: 1
  
  count.reset();
  console.log(count.Value()); // Output: 0
  