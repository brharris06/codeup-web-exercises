"use strict";
//
// //Write a function that takes in an input and returns the string "I have no idea what you just said";
//
// function stringExample(string){
//     return "I have no idea what you just said";
// }
//
// console.log(stringExample("string"));
//
//
// //write a function that takes in a number and returns that number times 2
// //so if you give it 2 it returns 4
// //if you give it 100 it returns 200
//
// function numberExample(x){
//     return x * 2
// }
//
// console.log(numberExample(5));
//
// // write a function that in a number and returns that number plus itself
//
// function morningExample(value){
//     return value + value;
// }
//
// console.log(morningExample(2));
//
// //now write a function that takes in two numbers, doubles each number, and then returns the sum of both numbers doubled.
//
//
// function morningExample2(num1, num2){
//     return (num1 * 2) + (num2 * 2);
// }
//
// console.log(morningExample2(4,5));
//
// // write a function that takes in a number and squares it (that is, returns that number multiplied by itself
//
// function morningExample3(num1){
//     return num1 * num1
// }
//
// console.log(morningExample3(5));
//
//
// //Write a function that takes in a string and returns its length
//
// function stringLength(string){
//     return string.length;
// }
//
// console.log(stringLength("How long is this string"));
//
// //write a function that takes in two strings and returns the sum of their lengths
//
// function sumOfStringLengths(string1, string2){
//     return string1.length + string2.length;
// }
//
// console.log(sumOfStringLengths("Hi", "There"));
//
// //Write a function that takes in a number and returns the string "even" or "odd" depending on whether the number is even or odd
//
// function oddOrEven(number){
//     if (number % 2 === 0){
//         return "even";
//     } else {
//         return "odd";
//     }
// }
//
// console.log(oddOrEven(4));


// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.

    // Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]


// function removeBsFromString(str) {
//     return str.replaceAll("b", "").replaceAll("B", "");
// }
//
// function removeBs(arr) {
//     var output = [];
//     arr.forEach(function (str) {
//         output.push(str);
//     });
//     return output;
// }
//
// console.log(removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]));


//February 14th Warm-Up
// Write a function, createUserMsg, that takes in a user object like the following...
// {
//     username: ‘jbomb’,
//     email: ‘john@email.com’,
//     isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’


// var userInfo = {
//     username: "jbomb",
//     email: "john@email.com",
//     isAdmin: true
// };
//
// function createUserMsg(userInfo) {
//     if (userInfo.isAdmin) {
//         return "User " + userInfo.username + is
//         an
//         admin
//         and
//         can
//         be
//         reached
//         at
//         " + userInfo.email;
//     } else {
//         return "User " + userInfo.username + is
//         not
//         an
//         admin
//         and
//         can
//         be
//         reached
//         at
//         " + userInfo.email;
//     }
//     return "User " + userInfo.username + " is " + ((userInfo.isAdmin) ? "" : "not ") + "an admdin and can be reached at "
//         + userInfo.email;
// }
//     console.log(createUserMsg(userInfo));

//     var person = {};
// {
//     person.firstName = "Brandon";
//     person.lastName = "Harris";
//     person.sayHello = function (input) {
//         return "Hello from " + input;
//     }
// }
//
// console.log(person.sayHello(person.firstName + " " + person.lastName));

//You are given the length and width of 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.


// function areaOrPerimeter(l, w) {
//     if (isNan(parseFloat(l)) || isNan(parseFloat(w))){
//         return false;
//     }
//     if (l == w) {
//         return l * w;
//     } else {
//         return 2*l + 2*w;
//     }
// }

// console.log(areaOrPerimeter(6,6));

//Create a function that takes 2 integers in form of a string as an input, and outputs the sum(also as a string):

// function sumTheStrings(numString1, numString2){
//     if (typeof numString1 !== "string" || typeof numString2 !== "string" || isNaN(parseFloat(numString2)) || isNaN(parseFloat(numString1))){
//         return  false;
//     }
//     return  (parseFloat(numString1) + parseFloat(numString2)).toString();
// }
//
// console.log(sumTheStrings("4","5"));

// In a new HTML file in `codeup-web-exercises`, add a script to solve the following problem...
// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//     Assume the following shape of the user object for the function input:
//     {
//         firstName: '...',
//         lastName: '...',
//         email: '...',
//         username: '...',
//         password: '...'
//     }
// The shape of the output should be the following:
// {
//     firstName: '...',
//         lastName: '...',
// }
// Regardless of the case of the first name and last name input, the output should be in all lower case.
// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }
// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}



// var userInput =
//     {
//         firstName: "Brandon",
//         lastName: "Harris",
//         email: "brandon.r.harris06@gmail.com",
//         username: "brharris2589",
//         password: "password123",
//     };
//
//
//
// function getSimpleUser(user) {
//     return {
//         firstName: user.firstName.toLowerCase(),
//         lastName: user.lastName.toLowerCase()
//     }
// }
//
// console.log(getSimpleUser(userInput));

// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
// var firstNames = ["CJ","Max","Claude","Meowmeow"];
// var lastNames = ["Cat","Feline","Kitten","Calico"];
//
// function createNames(arr1, arr2) {
//     var output = [];
//     for (var i = 0; i < arr1.length; i += 1) {
//         output.push({
//             firstName: arr1[3],
//             lastName: arr2[3]
//         });
//     }
//     return output;
// }
// console.log(createNames(firstNames, lastNames));

// write a function that accepts two intergers and returns the remainder of dividing the larger value by the smaller value.
//
// division by zero should return NaN.
//     examples: n=17
// n= 5
// result = 2 (remainder of "17 / 5")


// function someFunction (input1, input2) {
//     if (isNaN(parseFloat(input1)) || isNaN(parseFloat(input2))) {
//         return false;
//     }
//     if (input1>input2) {
//         return input1 % input2;
//     }
//     return input2 % input1;
// }
//
// console.log(someFunction(4, 2));


// create a function that accepts an object with two properties, parcelNumber and weight, and returns the
// (weight
// )

// function returnWeight (p,w) {
//     var parcelNumber = p;
//     var weight = w;
//     return {
//         p * w;
//     }
//
// }
//
// console.log(returnWeight(4,20));

// function parcelWeight(object) {
//     return object.weight;
// }
//  var parcel = {
//     parcelNumber: 1,
//      weight: 20
//  }
//
// console.log(parcelWeight(parcel));

//DOM warmup:
//Create a heading that says "Good Morning!"
//Create a button that says "Press if after 12pm"
//When the button is pressed, "Good Morning" changes to "Good Afternoon"

// <h3>Good Morning!</h3>
// <button>Press if after 12pm</button>
// var theButton = document.querySelector("button");
// function doThisWhenTheButtonIsClicked() {
//     document.querySelector('h3').innerText = "Good afternoon";
// }
//
// theButton.addEventListener('click', doThisWhenTheButtonIsClicked);
// }

// ================================= JS WARM UP
//
// Consider the following array of users:
//
    var users = [
        {
            username: 'fsmith',
            email: 'fsmith@email.com',
            numberOfLogins: 23
        },
        {
            username: 'ksmith',
            email: 'ksmith@email.com',
            numberOfLogins: 100
        },
        {
            username: 'lsmith',
            email: 'lsmith@email.com',
            numberOfLogins: 10
        }
    ];

// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.

// returnFirstUser(users) should return...

// {
//     username: 'fsmith',
//         email: 'fsmith@email.com',
//     numberOfLogins: 23
// }

// function returnFirstUser (users) {
//     return users[0];
// }
//
// console.log(returnFirstUser(users));

// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// returnTotalUserLogins(users) should return... 133
//

// function returnTotalUserLogins (users) {
//     var total = 0;
//     // for (var i = 0; i < users.length; i += 1) {
//     //     console.log(users[i].numberOfLogins);
//     //     total += users[i].numberOfLogins;
//     // }
//     users.forEach(function (user) {
//         total += user.numberOfLogins;
//     });
//     return total;
// }
//
// console.log(returnTotalUserLogins(users));
// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...
//
// {
//     username: 'ksmith',
//         email: 'ksmith@email.com',
//     numberOfLogins: 100
// }

// ================================= WARM UP

// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//
// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }
//
// Example 1...

// var operations1 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     }
// ]
//
//
//
//
//
//
// computeOperations(operations1, 10) // returns 20
//
//
//
//
// // Example 2...
//
// var operations2 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     },
//     {
//         operation: 'multiply',
//         integer: 3
//     },
// ]
//
// computeOperations(operations2, 10) // returns 60
//
//
// // Example 3...
//
// var operations3 = [
//
//     {
//         operation: 'subtract',
//         integer: 5
//     },
//     {
//         operation: 'multiply',
//         integer: -2
//     },
//     {
//         operation: 'add',
//         integer: 10
//     },
// ]
//
// computeOperations(operations3, 10) // returns 0
//
//
// function computeOperations(operators, startingNum) {
//     // create a total variable that we'll change with each iteration of loop
//     var total = startingNum;
//     // loop through each operation and console log each number
//     operators.forEach(function(operator) {
//         if (operator.operation === "add") {
//             // console.log("add the integer");
//             total += operator.integer;
//         } else if (operator.operation === "subtract") {
//             // console.log("subtract the integer");
//             total -= operator.integer;
//         } else if (operator.operation === "multiply") {
//             // console.log("mulitply the integer")
//             total *= operator.integer;
//         }
//
//
//         // console.log(operator.integer);
//         // console.log(operator.operation);
//     });
//     // based on the operation value, we can add/subtract/multiply the current integer to the total variable
//     // return total variable
//     return total;
//
// }
//
// computeOperations(operations3,10);
// Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.
//
// Examples:

//     var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];
//
// addTwos(nums1) // returns 2
// addTwos(nums2) // returns 4
// addTwos(nums3) // returns 0
// addTwos(nums4) // returns 8
// addTwos(nums5) // returns 10
//
//
// function addTwos (arr) {
//     var sum = 0;
//     arr.forEach(function(num) {
//         sum += (num === 2) ? 2 : 0;
// });
//     return sum;
// }
//
// console.log(addTwos(nums1), 2);


