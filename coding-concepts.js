// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
  console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: The code prints out the number of characters in the string. Since there's 4 characters in Echo, 4 characters in 2021, and a space in between, an output of 9 is printed to the console.


// --------------------2) What will this log?

var greeting = "Hello World!"
  console.log(greeting[3])

// a) Your answer: "l"
// b) Verify and explain: The code will print out the character that's located at index 3. In this case, that's the second letter "l" in hello.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
  console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The code will print out the character that's located at index 1. In this case, that's the string "Ruby".


// --------------------4) What will this log?

// var weekendDays = ["saturday", "sunday"]
  // console.log(weekendDays.toUpperCase())

var weekendDays = ["saturday", "sunday"]
  for (var i = 0; i < weekendDays.length; i++)
    console.log(weekendDays[i].toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: I kept getting a TypeError: weekendDays.toUpperCase is not a function error when I tried to run the sample code. I added the for loop and the variable i to weekendDays to get the code to print the expected output.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: 6, 6, 7
// b) Verify and explain: I was expecting the length of each data type in the array to be returned. I didn't expect "number" to be the returned output.
