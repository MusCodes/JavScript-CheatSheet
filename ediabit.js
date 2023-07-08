// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

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





// If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.

// You can test for empty string like this:

// "".length === 0 ➞ true
// Use a regular expression to test for an empty string.

// const REGEXP = /your solution/
// REGEXP.test("") ➞ true