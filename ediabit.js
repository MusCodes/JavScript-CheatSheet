// 1) There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

// Tower of Hanoi

// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

// Examples
// towerHanoi(3) ➞ 7

// towerHanoi(5) ➞ 31

// towerHanoi(0) ➞ 0
// Notes
// The amount of discs is always a positive integer.
// 1 disc can be changed per move.
function towerHanoi(discs) {
  if (discs === 0) {
    return 0;
  } else if (discs === 1) {
    return 1;
  } else {
    return 2 * towerHanoi(discs - 1) + 1;
  }
}

// 2) If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.

// You can test for empty string like this:

// "".length === 0 ➞ true
// Use a regular expression to test for an empty string.

// const REGEXP = /your solution/
// REGEXP.test("") ➞ true
const REGEXP = /^$/;
console.log(REGEXP.test(""));

// 3) Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.

// A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.

// For instance:

// [3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...

// [3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
function arrangeNumbers(arr) {
  const oddArray = [];
  const evenArray = [];

  // Distribute numbers into oddArray and evenArray
  arr.forEach(num => {
    if (num % 2 === 0) {
      evenArray.push(num);
    } else {
      oddArray.push(num);
    }
  });

  const result = [];

  
  for (let i = 0; i < oddArray.length - 1; i++) {
    result.push(oddArray[i]);
    result.push(null); 
  }

  
  for (let i = 0; i < evenArray.length - 1; i++) {
    result.push(evenArray[i]);
    result.push(null); 
  }

  if (oddArray.length > evenArray.length) {
    result.push(oddArray[oddArray.length - 1]);
  } else {
    result.push(evenArray[evenArray.length - 1]);
  }

  return result;
}


const numbers = [3, 4, 9, 10, 1];
const arrangedNumbers = arrangeNumbers(numbers);
console.log(arrangedNumbers); 





// 4) Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false


// 5) Create a function that takes an array of numbers and returns the second largest number.

// Examples
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23


// 6) Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]





//  7)  You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:

// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
