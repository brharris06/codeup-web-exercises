"use strict";

// alert("Hello World!");
// alert("This Is My Second Alert");
// var userChoice = confirm("are you sure you want to leave this page");
// console.log(userChoice);
//
// if(userChoice){
//     alert("wise choice!");}
//     else {
//         alert("booooo! Good Bye");
//     }

var currentSpeed = Number(prompt("how fast are you driving now?"))
console.log(currentSpeed);
var plannedSpeedIncrease = Number(prompt("how many more miles do you want to go?"));
var newSpeed = currentSpeed + plannedSpeedIncrease;
console.log("your planned speed is" + newSpeed);

var distanceLeft = Number(prompt("how many miles are you from your destination?"));

var timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
var timePlannedSpeed = (distanceLeft/newSpeed) * 60;
var timeGain = (timeAtCurrentSpeed - timePlannedSpeed);
alert("if you drive at " + newSpeed + " mph, you will arrive " + timeGain .toFixed(2) + " minutes sooner");

