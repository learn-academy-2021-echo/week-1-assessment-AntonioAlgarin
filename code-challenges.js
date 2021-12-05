// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// create a variable called boilingPoint and assign it a value of 212
var boilingPoint = 212
// create a variable called temp and assign it a value of 42
var temp = 42
// if a temperature is less than boiling point, print temperature is below boiling point
  if (temp < boilingPoint){
    console.log(`${temp} is below boiling point`);
}
// create a variable called temp and assign it a value of 350
var temp = 350
// if a temperature is greater than boiling point, print temperature is above boiling point
  if (temp > boilingPoint){
    console.log(`${temp} is above boiling point`);
}
// create a variable called temp and assign it a value of 212
var temp = 212
// if a temperature is at boiling point, print temperature is at boiling point
  if (temp === boilingPoint){
    console.log(`${temp} is at boiling point`);
}

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// creates an array with the values provided
var myNumbers1 = [3, 7, 0, 36, -9]
// creates an array with the values provided
var myNumbers2 = [8, -7, 42, 9, 13]
// uses concatenation to combine the two arrays
var myNumbers3 = myNumbers1.concat(myNumbers2)

// prints length of the combined array
console.log(myNumbers3.length);

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

// creates a variable called currentCohort and assigns it a value of "Echo 2021"
var currentCohort = "Echo 2021"
// creates a variable called splitString that splits the string into individual characters; "E", "c", "h", "o", "", "2", "0,", "2", "1"
var splitString = currentCohort.split("")
// creates a variable called reverseCohort that reverses the contents of splitString; "1", "2", "0", "2", "", "o", "h", "c", "E"
var reverseCohort = splitString.reverse()
// creates a variable called joinString that joins the individual characters into a string; "1202 ohcE"
var joinString = reverseCohort.join("")
// prints the joined string
console.log(joinString);


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// creates an array with the provided values
var myArray = [13, 34, 5, 10, 27, 42]
// runs the length of the array
for (var i = 0; i < myArray.length; i++)
// if the remainder of the value divided by 2 equals 0, print even
   if (myArray[i] % 2 === 0){
      console.log("even");
// if the remainder of the value divided by 2 equals 0, print odd
    } else if (myArray[i] % 2 !== 0){
      console.log("odd");
    }

// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

// creates a variable called number1 and assigns it a value of 58
var number1 = 58
// creates a variable called number2 and assigns it a value of 100
var number2 = 100

//if variable number1 is less than variable number2, subtract number1 from number2
if (number1 < number2){
  console.log(number2 - number1);

//if variable number2 is less than variable number1, subtract number2 from number1
  } else if (number2 < number1){
      console.log(number1 - number2);
  }

// creates a variable called number1 and assigns it a value of 27
var number1 = 27
// creates a variable called number2 and assigns it a value of 24
var number2 = 24

//if variable number1 is less than variable number2, subtract number1 from number2
  if (number1 < number2){
    console.log(number2 - number1);

//if variable number2 is less than variable number1, subtract number2 from number1
  } else if (number2 < number1){
    console.log(number1 - number2);
  }
