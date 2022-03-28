"use strict";

// Write a function that takes in an input and returns the string "I have no idea what you just said";

function noIdea (anything){
    return "I have no idea what you just said";
}

// write a function that takes in a number and returns that number times 2
// so if you give it 2 it returns 4
// if you give it 100 it returns 200

function timesTwo(number){
    return number * 2;
}

// write a function that in a number and returns that number plus itself

function numberPlusItself(number){
    return number + number;
}

// now write a function that takes in two numbers, doubles each number, and then returns the sum of both numbers doubled

function sumOfDoubles(number1, number2){
    return (number1 *2) + (number2 * 2);
}

// write a function that takes in a number and squares it (that is, returns that number multiplied by itself)

function squareANumber(number){
    // return number**2;
    return (number * number);
}

// Write a function that takes in a string and returns its length

function stringLength(string){
    return string.length;
}

// Write a function that takes in two strings and returns the sum of their lengths

function sumOfStringLengths(string1, string2){
    return string1.length + string2.length;
}

// Write a function that takes in a number and returns the string "even" or "odd" depending on whether the number is even or odd

function oddOrEven(number){
    if (number % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}

/*

Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.

Examples...

removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']

 */


// function removeBsFromString(str) {
//     return str.replaceAll('b', '').replaceAll('B', '');
// }
//
// function removeBs(arr) {
//     var output = [];
//     arr.forEach(function(str) {
//         output.push(removeBsFromString(str));
//     });
//     return output;
// }
//


// Samuel Arguello's Solution
// function removeBs(arr) {
//     return arr.join(',')
//         .replaceAll("b", '')
//         .replaceAll("B", '')
//         .split(',');
// }

/*
Write a function, createUserMsg, that takes in a user object like the following...

{
  username: 'jbomb',
  email: 'john@email.com',
  isAdmin: true
}

...and returns a string output that displays in the console like this...

'User jbomb is an admin and can be reached at john@email.com'

If jbomb were not an admin, the message should display...

'User jbomb is not an admin and can be reached at john@email.com'

 */

// var user = {
//     username: 'jbomb',
//     email: 'john@email.com',
//     isAdmin: true
//
// };

// function createUserMsg(user) {
//     // if (user.isAdmin) {
//     //     return "User " + user.username + " is an admin and can be reached at " + user.email
//     // } else {
//     //     return "User " + user.username + " is not an admin and can be reached at " + user.email;
//     // }
//     return "User " + user.username + " is " + ((user.isAdmin) ? "" : "not ") + "an admin and can be reached at " + user.email;
// }

// function areaOrPerimeter(length, width){
//     if (isNaN(length) || isNaN(width)){
//         return false;
//     }
//
//     if (length == width) {
//         return length * width;
//     }
//     return 2 * length + 2 * width;
// }


// Area or perimeter

// Write a function that takes two parameters,
// the length and width of a square or rectangle.
// If it's a square, return the area
// If it's a rectangle, return the perimeter

// Bonus: if the input is not a number or
// numeric string, return false

// function areaOrPerimeter(length, width){
//     if (isNaN(parseFloat(length)) || isNaN(parseFloat(width))){
//         return false;
//     }
//     if (length == width){
//         return length * width;
//     }
//     return 2*length + 2*width;
// }

// write a function, sumTheStrings
// it should take two numeric strings as input
// it should add the numbers
// and output the sum **as a string**

// bonus: return false if the arguments
// are anything other than numeric strings

// function sumTheStrings(numString1, numString2){
//     if (numString1 === ''){numString1 = '0'}
//     if (numString2 === ''){numString2 = '0'}
//
//     if (typeof numString1 !== 'string' || typeof numString2 !== 'string' || isNaN(Number(numString2)) || isNaN(Number(numString1))){
//         return false;
//     }
//     return (parseFloat(numString1) + parseFloat(numString2)).toString();
// }

// function slopeOfALine(array1, array2){
//     if (isNaN(array1[0]) || isNaN(array1[1]) || isNaN(array2[0]) || isNaN(array2[1]) || array2.length > 2 || array1.length > 2){
//         return false;
//     }
//
//     if (array2[1] - array1[1] / array2[0] - array1[0] === 0 || (array1[0] === array2[0] && array2[1]) === array2[1]){
//         return null;
//     }
//
//     return array2[1] - array1[1] / array2[0] - array1[0];
// }

/* Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

<<<<<<< HEAD
Division by zero should return NaN.
Examples:

n = 17
m = 5
result = 2 (remainder of `17 / 5`)
*/

// function remainder(int1, int2){
//     if (isNaN(parseFloat(int1)) || isNaN(parseFloat(int2))){
//         console.log("Naughty, naughty, bad data!");
//         return false;
//     }
//     if (int1>int2) {
//         return int1 % int2;
//     }
//    return int2 % int1;
// }

/*
* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

// function printer_error(string){
//     var totalOverM = 0;
//     for (var i in string){
//         if (string[i] > "m"){totalOverM++}
//     }
//     return "" + totalOverM + "/" + string.length;
// }

/*
================================= WARM UP

In a new HTML file in `codeup-web-exercises`, add a script to solve the following problem...

Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.

Assume the following shape of the user object for the function input:

```
{
  firstName: '...',
  lastName: '...',
  email: '...',
  username: '...',
  password: '...'
}
```

The shape of the output should be the following:

```
{
  firstName: '...',
  lastName: '...',
}
```

Regardless of the case of the first name and last name input, the output should be in all lower case.

```
var fred = {
  firstName: 'Fred',
  lastName: 'Smith',
  email: 'fred@email.com',
  username: 'fred123',
  password: 'pass123'
}

getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}
```
 */

// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }
//
// function getSimpleUser(user) {
//     return {
//         firstName: user.firstName.toLowerCase(),
//         lastName: user.lastName.toLowerCase()
//     }
// }

// console.log(getSimpleUser(fred));

// ================================= WARM UP
//
// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//
//     var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
// createNames(firstNames, lastNames) // returns...
//
//     [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.

// function createNames(arr1, arr2) {
//     var output = [];
//     var length = arr1.length;
//     for (var i = 0; i < length; i += 1) {
//         output.push({
//             firstName: arr1[3],
//             lastName: arr2[3]
//         });
//     }
//     return output;
// }
//
// var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];


// console.log(createNames(firstNames, lastNames));

// Create a function that accepts an object with two properties, parcelNumber and weight, and returns the weight.


// function parcelWeight(object){
//     return object.weight;
// }
//
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// }
//

// function parcelWeight(object){
//     return object.weight;
// }
//
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// }


// console.log(parcelWeight(parcel));
// output: 20

// Create a function that accepts an array of objects with two properties, parcelNumber and weight, and returns the total weight of all parcels.


// function totalWeight(arrayOfObjects){
//     var total = 0;
//     for (var i = 0; i < arrayOfObjects.length; i++){
//         total += arrayOfObjects[i].weight;
//     }
//     return total;
// }
//
// var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];
//
// console.log(totalWeight(parcels));
// output: 45

// Create a function that accepts an array of objects with two properties, parcelNumber and weight, and outputs the content to a web page in two columns, with the total listed at the end.

// function outputParcelInfo(parcelsArray){
//     var outputDiv = document.getElementById("parcelInfo");
//     var total = 0;
//     var html = "<table><tr><th>Parcel Number</th><th>Weight</th>";
//     for (var i = 0; i < parcelsArray.length; i++){
//         total += parcelsArray[i].weight;
//         html += "<tr><td>" + parcelsArray[i].number + "</td><td>" + parcelsArray[i].weight + "</td></tr>";
//     }
//     html += "<tr><td>Total:</td><td>" + total + "</td></table>";
//     outputDiv.innerHTML = html;
// }
//
// outputParcelInfo(parcels);

// DOM warmup:
// Create a heading that says "Good morning!"
// Create a button that says "Press if after 12pm"
// When the button is pressed, "Good morning" changes to "Good afternoon"
// var theButton = document.querySelector("button");
//
// function changeHeader(){
//     document.querySelector('h1').innerText = "Good afternoon!";
// }
//
// theButton.addEventListener('click', changeHeader);







// function parcelWeight (object) {
//     return object.weight;
// }

// var parcel = {
//     number: 1,
//     weight: 20
// }

// console.log(parcelWeight(parcel));

// function totalWeight(array){
//     var total = 0;
//     for (var i = 0; i < array.length; i++){
//         total += array[i].weight;
//     }
//     return total;
// }

// var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];

// console.log(totalWeight(parcels));

// function outputParcelInfo(parcelsArray){
//     var outputDiv = document.getElementById("parcelInfo");
//     var total = 0;
//     var html = "<table><tr><th>Parcel Number</th><th>Weight</th>";
//     for (var i = 0; i < parcelsArray.length; i++){
//         total += parcelsArray[i].weight;
//         html += "<tr><td>" + parcelsArray[i].number + "</td><td>" + parcelsArray[i].weight + "</td></tr>";
//     }
//     html += "<tr><td>Total:</td><td>" + total + "</td></table>";
//     outputDiv.innerHTML = html;
// }

// outputParcelInfo(parcels);

// var changeColorButton = document.getElementById("changeColor");
// var changeColorButton = document.querySelector("#changeColor");
// changeColorButton.addEventListener('click', function(){
//     document.getElementById("square").style.backgroundColor = "rebeccapurple";
// });

// $("#changeColor").click(function(){
//    $("#square").css('background', 'rebeccapurple');
// });

// document.getElementById("reset").addEventListener('click', function(){
//    location.reload();
// });

// $("#reset").on('click', function(){
//     window.location.reload();
// });

// document.querySelectorAll(".square")
//     .forEach(item =>{
//         item.addEventListener("click", (e)=>{
//            console.log(e.target.dataset.color);
//            const targetColor = e.target.dataset.color;
//            // e.target.style.backgroundColor = e.target.dataset.color;
//             e.target.addEventListener('mouseenter', ()=>{e.target.style.backgroundColor = targetColor;});
//             e.target.addEventListener('mouseleave', ()=> {e.target.style.backgroundColor = '';});
//         });
//     });


// ================================= JS WARM UP
//
// Consider the following array of users:
//
// var users = [
//   {
//     username: 'fsmith',
//     email: 'fsmith@email.com',
//     numberOfLogins: 23
//   },
//   {
//     username: 'ksmith',
//     email: 'ksmith@email.com',
//     numberOfLogins: 100
//   },
//   {
//     username: 'lsmith',
//     email: 'lsmith@email.com',
//     numberOfLogins: 10
//   }
// ];
//
// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
//
// returnFirstUser(users) should return...
//
// {
//   username: 'fsmith',
//   email: 'fsmith@email.com',
//   numberOfLogins: 23
// }
//
// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// returnTotalUserLogins(users) should return... 133
//
// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...
//
// {
//   username: 'ksmith',
//   email: 'ksmith@email.com',
//   numberOfLogins: 100
// }



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

function returnFirstUser(users) {
    return users[0];
}

function returnTotalUserLogins(users) {
    var total = 0;
    for (var i = 0; i < users.length; i += 1) {
        total += users[i].numberOfLogins;
    }
    // users.forEach(function(user) {
    //     total += user.numberOfLogins;
    // });
    return total;
}

function returnMostFrequentUser(users) {
    var mostFrequentUser = users[0];
    users.forEach(function(user) {
        // console.log(user.numberOfLogins, mostFrequentUser.numberOfLogins)
        // console.log(user.numberOfLogins > mostFrequentUser.numberOfLogins);
        if (user.numberOfLogins > mostFrequentUser.numberOfLogins) {
            mostFrequentUser = user;
        }
    });
    return mostFrequentUser;
}

// console.log(returnMostFrequentUser(users));


// console.log(returnTotalUserLogins(users));


// console.log(returnFirstUser(users));


/*

================================= WARM UP

Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:

{
  operation: 'subtract' (or 'multiply' or 'add'),
  integer: 7 (or any positive or negative integer)
}

Example 1...

var operations1 = [

  {
    operation: 'add',
    integer: 7
  },
  {
    operation: 'add',
    integer: 3
  }
]


computeOperations(operations1, 10) // returns 20


Example 2...

var operations2 = [

  {
    operation: 'add',
    integer: 7
  },
  {
    operation: 'add',
    integer: 3
  },
  {
    operation: 'multiply',
    integer: 3
  },
]

computeOperations(operations2, 10) // returns 60


Example 3...

var operations3 = [

  {
    operation: 'subtract',
    integer: 5
  },
  {
    operation: 'multiply',
    integer: -2
  },
  {
    operation: 'add',
    integer: 10
  },
]

computeOperations(operations3, 10) // returns 0

 */

var operations1 = [
    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    }
];

var operations2 = [
    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    },
    {
        operation: 'multiply',
        integer: 3
    },
];

var operations3 = [
    {
        operation: 'subtract',
        integer: 5
    },
    {
        operation: 'multiply',
        integer: -2
    },
    {
        operation: 'add',
        integer: 10
    }
]

// function computeOperations(operators, startingNum) {
//     // create a total variable that we'll change with each iteration of loop
//     var total = startingNum;
//
//     // loop through each operation and console log each number
//     operators.forEach(function(operator) {
//         if (operator.operation === 'add') {
//             total += operator.integer;
//         } else if (operator.operation === 'subtract') {
//             total -= operator.integer;
//         } else if (operator.operation === 'multiply') {
//             total *= operator.integer;
//         }
//         // console.log(operator.integer);
//         // console.log(operator.operation);
//     });
//         // based on the operation value, we can add/subtract/multiple the current integer to the total variable
//     // return total variable
//     return total;
// }

// function computeOperations(operators, startingNum) {
//     // create a total variable that we'll change with each iteration of loop
//     var total = startingNum;
//
//     // loop through each operation and console log each number
//     for (var i = 0; i <= operators.length; i += 1) {
//         if (operators[i].operation === 'add') {
//             total += operators[i].integer;
//         } else if (operators[i].operation === 'subtract') {
//             total -= operators[i].integer;
//         } else if (operators[i].operation === 'multiply') {
//             total *= operators[i].integer;
//         }
//     }
//     // based on the operation value, we can add/subtract/multiple the current integer to the total variable
//     // return total variable
//     return total;
// }


// console.log(computeOperations(operations1, 10), 20);
// console.log(computeOperations(operations2, 10), 60);
// console.log(computeOperations(operations3, 10), 0);



// var items = ['hello', 'world', 'codeup'];
//
// for (var i = 0; i < items.length; i += 1) {
//     console.log(items[i]);
// }


/*
================================= WARM UP

Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.

Examples:

var nums1 = [1, 2, 3, 4, 5];
var nums2 = [2, 2, 3, 4, 5];
var nums3 = [10, 0, -5, 4, 5];
var nums4 = [2, 2, -5, 2, 2];
var nums5 = [2, 2, 2, 2, 2];

addTwos(nums1) // returns 2
addTwos(nums2) // returns 4
addTwos(nums3) // returns 0
addTwos(nums4) // returns 8
addTwos(nums5) // returns 10
 */


function addTwos(arr) {
    var sum = 0;
    // arr.forEach(function(num) {
    //     sum += (num === 2) ? num : 0;
    // });
    for (var i = 0; i < arr.length; i += 1) {
        sum += (arr[i] === 2) ? arr[i] : 0;
    }
    return sum;
}

var nums1 = [1, 2, 3, 4, 5];
var nums2 = [2, 2, 3, 4, 5];
var nums3 = [10, 0, -5, 4, 5];
var nums4 = [2, 2, -5, 2, 2];
var nums5 = [2, 2, 2, 2, 2];

// console.log(addTwos(nums1), 2); // returns 2
// console.log(addTwos(nums2), 4); // returns 4
// console.log(addTwos(nums3), 0); // returns 0
// console.log(addTwos(nums4), 8); // returns 8
// console.log(addTwos(nums5), 10);// returns 10


// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//
//     Examples...
//
// returnStringObject('hello') // returns...
//
// {
//     stringValue: 'hello',
//         stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
//     stringValue: 'codeup',
//         stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }




function returnStringObject(str) {
    return {
        stringValue: str,
        stringArray: str.split('')
    }
}


// console.log(returnStringObject('hello'));
// console.log(returnStringObject('codeup'));

/*
Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.

var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
var nums4 = [-3, -10]; // countNegatives(nums4) returns 2
 */












// function countNegatives(nums) {
//     var negativesCount = 0;
//     nums.forEach(function(num) {
//         if (num < 0) {
//             negativesCount++;
//         }
//     });
//     return negativesCount;
// }
//
//
// var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
// var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
// var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
// var nums4 = [-3, -10]; // countNegatives(nums4) returns 2

// console.log(countNegatives(nums1), 1);
// console.log(countNegatives(nums2), 2);
// console.log(countNegatives(nums3), 0);
// console.log(countNegatives(nums4), 2);



/*

Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of last name strings. Assume that each user object has a property called 'firstName'.

Example...

var users = [
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@email.com'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        email: 'sally@email.com'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        email: 'fred@email.com'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith',
        email: 'cathy@email.com'
    },
    {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joe@email.com'
    },
];

createFirstNamesArray(users); // returns... ['Sally', 'Fred', 'Cathy', 'Joe']

 */

// var users = [
//     {
//         firstName: 'Bob',
//         lastName: 'Smith',
//         email: 'bob@email.com'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         email: 'sally@email.com'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         email: 'fred@email.com'
//     },
//     {
//         firstName: 'Cathy',
//         lastName: 'Smith',
//         email: 'cathy@email.com'
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Smith',
//         email: 'joe@email.com'
//     },
// ];
//
// function createFirstNamesArray(users) {
//     var firstNames = [];
//     users.forEach(function(user) {
//         firstNames.push(user.firstName);
//     });
//     return firstNames
// }
//
// console.log(createFirstNamesArray(users)) // returns... ['Sally', 'Fred', 'Cathy', 'Joe']


// $(".square").hover(function(){
//    console.log($(this).attr('data-color'));
//    const $targetColor = $(this).attr('data-color');
//    $(this).css('background-color', $targetColor);
// }, function(){
//     $(this).css('background-color', '');
// });

// document.querySelectorAll(".square").
// forEach(function(element){
//     element.addEventListener("mouseenter", function(event){
//         // console.log(event.target);
//         const targetColor = event.target.dataset.color;
//         event.target.style.backgroundColor = targetColor;
//     });
//     element.addEventListener("mouseleave", function(event){
//         event.target.style.backgroundColor = '';
//     });
// });










// document.querySelectorAll(".square")
//     .forEach(item =>{
//         item.addEventListener("mouseenter", (e)=>{
//             const targetColor = e.target.dataset.color;
//             e.target.style.backgroundColor = e.target.dataset.color;
//             e.target.addEventListener('mouseleave', ()=> {e.target.style.backgroundColor = '';});
//         });
//     });

// $(".square").hover(function(){
//     console.log($(this).attr('data-color'));
//     const $targetColor = $(this).attr('data-color');
//     $(this).css('background-color', $targetColor);
// }, function(){
//     $(this).css('background-color', '');
// });

// You have four squares inside a div called changingColors.
// Every time a square is clicked, its background turns to yellow, then when you click it again,
// its background goes back to white

// $("#changingColors .square").on('click', function()
//     {$(this).toggleClass('yellow')}
// );

// const changingColorsSquares = document.querySelectorAll("#changingColors .square");
//
// function toggleColor(e){
//     !e.target.style.backgroundColor ? e.target.style.backgroundColor = 'yellow' : e.target.style.backgroundColor = "";
// }
//
// changingColorsSquares.forEach(square => square.addEventListener('click', toggleColor));

// ================================= WARM UP
// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//     ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomse ‘$’
// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

function encodeStr (str) {
   //split the string into an array of characters
    //map over them to produce a return value that changes the three characters and returns the current characters otherwise
    //join the characters together into our final output
    return str.split("").map(char => {
        if (char.toLowerCase() === 'a') {
            return "@";
        } else if (char.toLowerCase() === "s") {
            return "$";
        } else if (char.toLowerCase() === "i") {
            return 1;
        } else {
            return char;
        }
    }).join("");
}

console.log(encodeStr("aiscity"));  // returns ‘@pple’









