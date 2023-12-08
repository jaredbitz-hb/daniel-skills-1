//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
const colorCopy = faveColors.slice();
console.log(colorCopy);
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push('blue');
console.log(colorCopy);
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

//CODE HERE
const numbers = [1, 2, 3, 4, 5]
const middleNums = numbers.slice(1, 4);
console.log(middleNums);


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

// CODE HERE
const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]


const answers = [];

// Loop over 'bigOrSmallArray'
for (let i = 0; i < bigOrSmallArray.length; i++) {
  // Check if the number is greater than 100
  if (bigOrSmallArray[i] > 100) {
    // If greater than 100, push 'big' to the 'answers' array
    answers.push('big');
  } else {
    // If less than or equal to 100, push 'small' to the 'answers' array
    answers.push('small');
  }
}

// Display the 'answers' array
console.log(answers);
