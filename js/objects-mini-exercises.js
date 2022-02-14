"use strict";


// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
//     - isOpen
//
// Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.

// var beverages = {};
// {
//     beverages.brandName = "Sprite";
//     beverages.type = "Soda";
//     beverages.volumeInLiters = "16oz";
//     beverages.priceInCents = "149";
//     beverages.expirationDate = ["Dec 31, 2022"];
//     beverages.datesOfPreviousSips = ["Feb 11, 2022", "02/11/2022"];
//     beverages.isOpen = "false";
// }
//
// console.log(beverages);


// var users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ];
//
// console.log(users.{givenNameTwo};
//
//
// var message = "";
//
// users.forEach(function (user){
//     message += user.givenName + " ";
// })
//
// console.log(message.trim());



// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam Cathy Karen”
// 2. Change the names of all users to “John Doe”
//   3. Increase the current age of all users by 1
// Can you accomplish each step using iteration?


// var user = {
//     givenName: "Justin",
//     age: 25,
//     sayHello: function () {
//         console.log("Howdy!");
//     }
// }
//
// user.sayHello();

// console.log(user);

var user = {
    givenName: "Justin",
    age: 25,
    sayHello: function (input) {
        console.log(input);
    }
}

user.sayHello("Hello, Titan!");

