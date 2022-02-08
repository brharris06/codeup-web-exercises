"use strict";

//Write a function that takes in an input and returns the string "I have no idea what you just said";

function stringExample(string){
    return "I have no idea what you just said";
}

console.log(stringExample("string"));


//write a function that takes in a number and returns that number times 2
//so if you give it 2 it returns 4
//if you give it 100 it returns 200

function numberExample(x){
    return x * 2
}

console.log(numberExample(5));

// write a function that in a number and returns that number plus itself

function morningExample(value){
    return value + value;
}

console.log(morningExample(2));

//now write a function that takes in two numbers, doubles each number, and then returns the sum of both numbers doubled.


function morningExample2(num1, num2){
    return (num1 * 2) + (num2 * 2);
}

console.log(morningExample2(4,5));

// write a function that takes in a number and squares it (that is, returns that number multiplied by itself

function morningExample3(num1){
    return num1 * num1
}

console.log(morningExample3(5));


//Write a function that takes in a string and returns its length

function stringLength(string){
    return string.length;
}

console.log(stringLength("How long is this string"));

//write a function that takes in two strings and returns the sum of their lengths

function sumOfStringLengths(string1, string2){
    return string1.length + string2.length;
}

console.log(sumOfStringLengths("Hi", "There"));

//Write a function that takes in a number and returns the string "even" or "odd" depending on whether the number is even or odd

function oddOrEven(number){
    if (number % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}

console.log(oddOrEven(4));


