// Qno1:Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// let newa = prompt("Enter your value");
// document.write(`<h2> The value of is ${newa} </h2> <br>`);
// document.write(`<h2>The value of is ${++newa} </h2> <br>`);
// document.write(`<h2>The value of is ${++newa} </h2> <br>`);
// document.write(`<h2>The value of is ${--newa} </h2> <br>`);
// document.write(`<h2>The value of is ${--newa} </h2> <br>`);

// Qn02:What will be the output in variables a, b & result after
// execution of the following script:

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(--a + "<br>");
// document.write(--b + "<br>");
// document.write(++b + "<br>");
// document.write(b-- + "<br>");

// Qno3:Write a program that takes input a name from user &
// greet the user.

// let userName = prompt("Enter your name");

// input = userName;
// if(input){
//     document.write(`<h2> welcome to our Website ${input} <h2>`);
// }
// else if(input === ""){
//     document.write(`<h2> Please Put the "Name" </h2>`)
// }

// Qno4:Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// // should be displayed by default.

// function showTable() {
//     const input = document.getElementById('number').value;
//     const number = input === '' ? 5 : parseInt(input);
//     const tableDiv = document.getElementById('table');

//     let tableHTML = `<p>Multiplication Table of ${number}:</p><ul>`;
//     for (let i = 1; i <= 10; i++) {
//         tableHTML += `<li>${number} x ${i} = ${number * i}</li>`;
//     }
//     tableHTML += '</ul>';

//     tableDiv.innerHTML = tableHTML;
// }

// chapter no 9 & 10

// // Qno1:Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let city = prompt("Enter your First city");
// let city1 = prompt("Enter your 2nd city");
// city === "karachi";
// city1 === "lahore";
// if(city === "karachi"){
//     document.write(`<h1> “Welcome to city of lights” ${city} <br> <h1>`);
// }
// if (city1 === "lahore"){
//     document.write(`<h1> “The cultral hub of Pakistan” ${city1} <br> <h1>`);
// }
// if(city === ""){
//     document.write(`<h1> “Sorry Put the 1st City Name” <br> <h1>`);
// }
// if(city1 === ""){
//     document.write(`<h1> “Sorry Put the 2nd City Name” <br> <h1>`);
// }

// Qno2:Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter your gender");

// if(gender === "male"){
//     document.write(`<h1> Good Morning Sir. </h1>`)
// }
// else if(gender === "female"){
// document.write(`<h1> Good Morning Ma’am. </h1>`)
// } else {
//     document.write(`<h1> Sorry, Please Enter 'Male' or 'Female' </h1>`)
// }

// Qno3:Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let colorRed = prompt("Enter your color & select the traffic rule");
// let colorYellow = prompt("Enter your color & select the traffic rule");
// let colorGreen = prompt("Enter your color & select the traffic rule");

// if(colorRed === "red"){
//     document.write(`<h1> “Red color mean Must  Stop” <br> <h1>`);
// }else{
//     document.write(`<h1> “Sorry, Please Enter 'Red' color” <br>`)
// }
// if(colorYellow === "yellow"){
//     document.write(`<h1> “Yellow color mean Ready  to Move” <br> <h1>`);
// }else{
//     document.write(`<h1> “Sorry, Please Enter 'Yellow' color” <br>`)
// }
// if(colorGreen === "green"){
//     document.write(`<h1> “Red color mean Move Now” <br> <h1>`);
// }else{
//     document.write(`<h1> “Sorry, Please Enter 'Green' color” <br>`)
// }

// // Qno4:Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// // show the message “Please refill the fuel in your car”


// let remainingFuel = (prompt("Enter the remaining fuel in your car (in litres):"));
// if (remainingFuel <= 0.25) {
//     document.write("Please refill the fuel in your car");
// } else {
//     document.write("Fuel level is sufficient");
// }


// Qno5: Run this script, & check whether alert message would be
// // displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }

// Qno6:Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// // grade as per following table:


// function calculateGrade() {
//     // Get input values
//     let marks1 = parseFloat(document.getElementById('marks1').value);
//     let marks2 = parseFloat(document.getElementById('marks2').value);
//     let marks3 = parseFloat(document.getElementById('marks3').value);
//     let totalMarks = parseFloat(document.getElementById('totalMarks').value);

//     // Compute total obtained marks and percentage
//     let obtainedMarks = marks1 + marks2 + marks3;
//     let percentage = (obtainedMarks / totalMarks) * 100;

//     // Determine grade based on percentage
//     let grade;
//     if (percentage >= 90) {
//         grade = 'A+';
//     } else if (percentage >= 80) {
//         grade = 'A';
//     } else if (percentage >= 70) {
//         grade = 'B';
//     } else if (percentage >= 60) {
//         grade = 'C';
//     } else if (percentage >= 50) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }

//     // Display the result
//     document.getElementById('result').innerHTML = `
//         <p>Obtained Marks: ${obtainedMarks}</p>
//         <p>Percentage: ${percentage.toFixed(2)}%</p>
//         <p>Grade: ${grade}</p>
//     `;
// }

// Qno7:Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// function playGuessingGame() {
//     // Store a secret number (1 to 10)
//     const secretNumber = Math.floor(Math.random() * 10) + 1;

//     // Prompt user to guess the secret number
//     let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

//     // Check the user's guess
//     if (userGuess === secretNumber) {
//         alert("Bingo! Correct answer");
//     } else if (userGuess + 1 === secretNumber) {
//         alert("Close enough to the correct answer");
//     } else {
//         alert(`Sorry, try again! The secret number was ${secretNumber}`);
//     }
// }

// Qno8:Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// function checkDivisibility() {
//     // Prompt the user to enter a number
//     let number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));

//     // Check if the number is divisible by 3
//     if (number % 3 === 0) {
//         alert("The number is divisible by 3.");
//     } else {
//         alert("The number is not divisible by 3.");
//     }
// }

// Qno9:  Write a program that checks whether the given input is an
// even number or an odd number.

// function checkEvenOdd() {
//     // Prompt the user to enter a number
//     let number = parseInt(prompt("Enter a number to check if it is even or odd:"));

//     // Check if the number is even or odd
//     if (number % 2 === 0) {
//         alert("The number is even.");
//     } else {
//         alert("The number is odd.");
//     }
// }

// Qno10:Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// function checkTemperature() {
//     // Prompt the user to enter the temperature
//     let temperature = parseFloat(prompt("Enter the temperature in °C:"));

//     // Determine the message based on the temperature
//     let message;
//     if (temperature > 40) {
//         message = "It is too hot outside.";
//     } else if (temperature > 30) {
//         message = "The Weather today is Normal.";
//     } else if (temperature > 20) {
//         message = "Today’s Weather is cool.";
//     } else if (temperature > 10) {
//         message = "OMG! Today’s weather is so Cool.";
//     } else {
//         message = "It’s freezing cold outside!";
//     }

//     // Display the message
//     alert(message);
// }

// Qno11:Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// function calculate() {
//     // Prompt the user to input numbers and the operation
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));
//     let operation = prompt("Enter the operation (+, -, *, /, %):");

//     // Initialize a variable to store the result
//     let result;

//     // Perform the calculation based on the operation
//     if (operation === "+") {
//         result = num1 + num2;
//     } else if (operation === "-") {
//         result = num1 - num2;
//     } else if (operation === "*") {
//         result = num1 * num2;
//     } else if (operation === "/") {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = "Error: Division by zero is not allowed!";
//         }
//     } else if (operation === "%") {
//         if (num2 !== 0) {
//             result = num1 % num2;
//         } else {
//             result = "Error: Division by zero is not allowed!";
//         }
//     } else {
//         result = "Error: Invalid operation!";
//     }

//     // Display the result
//     alert(`The result is: ${result}`);
// }

// chapter no 12 & 13;

// Qno1:
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// function checkCharacter() {
//     // Prompt the user to enter a character
//     let input = prompt("Enter a single character (number or letter):");

//     // Ensure the input is a single character
//     if (input.length !== 1) {
//         alert("Please enter a single character.");
//         return;
//     }

//     // Get the ASCII code of the character
//     let charCode = input.charCodeAt(0);

//     // Check if it is a number
//     if (charCode >= 48 && charCode <= 57) {
//         alert("The input is a number.");
//     }
//     // Check if it is an uppercase letter
//     else if (charCode >= 65 && charCode <= 90) {
//         alert("The input is an uppercase letter.");
//     }
//     // Check if it is a lowercase letter
//     else if (charCode >= 97 && charCode <= 122) {
//         alert("The input is a lowercase letter.");
//     } else {
//         alert("The input is neither a number nor a letter.");
//     }
// }

// Qno2: 
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// function compareIntegers() {
//     // Prompt the user to enter two integers
//     let num1 = parseInt(prompt("Enter the first integer:"));
//     let num2 = parseInt(prompt("Enter the second integer:"));

//     // Compare the two integers and display the result
//     if (num1 > num2) {
//         alert(`The larger number is: ${num1}`);
//     } else if (num2 > num1) {
//         alert(`The larger number is: ${num2}`);
//     } else {
//         alert("Both integers are equal.");
//     }
// }

// Qno3:Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// function checkNumber() {
//     // Prompt the user to enter a number
//     let number = parseFloat(prompt("Enter a number:"));

//     // Determine if the number is positive, negative, or zero
//     if (number > 0) {
//         alert("The number is positive.");
//     } else if (number < 0) {
//         alert("The number is negative.");
//     } else {
//         alert("The number is zero.");
//     }
// }

// Qno4: Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// function isVowel() {
//     // Prompt the user to enter a character
//     let char = prompt("Enter a character:");

//     // Ensure the input is a single character
//     if (char.length !== 1) {
//         alert("Please enter a single character.");
//         return;
//     }

//     // Check if the character is a vowel (either uppercase or lowercase)
//     let vowels = "aeiouAEIOU"; // String containing both lowercase and uppercase vowels

//     // Check if the character is a vowel
//     if (vowels.indexOf(char) !== -1) {
//         alert("True - It is a vowel.");
//     } else {
//         alert("False - It is not a vowel.");
//     }
// }

// // Qno5:Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


// function validatePassword(){
//     // Store the correct password in a variable
//     const correctPassword = "mySecret123"; // You can change this to any desired password

//     // Prompt the user to enter their password
//     let userPassword = prompt("Please enter your password:");

//     // Check if the user entered a password
//     if (!userPassword) {
//         alert("Please enter your password");
//     } else {
//         // Validate if the entered password matches the correct password
//         if (userPassword === correctPassword) {
//             alert("Correct! The password you entered matches the original password.");
//         } else {
//             alert("Incorrect password.");
//         }
//     }
// }

// Qno6:This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// let greeting;
// let hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// // document.write(greeting); 

// Qno7:Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// function greetUser() {
//     // Prompt the user to enter time in 24-hour format (e.g., 1900 for 7:00 PM)
//     let time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):"));

//     // Check if the input is valid (time should be between 0000 and 2359)
//     if (isNaN(time) || time < 0 || time > 2359 || time % 100 >= 60) {
//         alert("Please enter a valid time in 24-hour format.");
//         return;
//     }

//     // Extract the hour and minute from the time
//     let hour = Math.floor(time / 100);
    
//     // Determine the greeting based on the time of day
//     if (hour >= 5 && hour < 12) {
//         alert("Good Morning!");
//     } else if (hour >= 12 && hour < 17) {
//         alert("Good Afternoon!");
//     } else if (hour >= 17 && hour < 21) {
//         alert("Good Evening!");
//     } else {
//         alert("Good Night!");
//     }
// }