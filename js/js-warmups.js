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




