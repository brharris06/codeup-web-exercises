"use strict";

//Break and Continue Exercise.

while(true){
    var userNumber = prompt("Please enter an odd number beteween 1 and 50");
    if(userNumber % 2 === 1 && userNumber <=50 && userNumber >=1)
    {break;}
}

console.log("Number to skis is. " + userNumber);

for(var i = 1; i < 50; i+=2){
    if(i == userNumber){
        console.log("Yikes! Skipping number: " + userNumber);
        continue;
    }
    console.log(i);
}