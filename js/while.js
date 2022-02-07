// "use strict";
//
// var number = 2;
// while(number <= 65536){
//     console.log(number);
//     number = number * 2;
// }

// var amountofCones = Math.floor(Math.random() * 100) + 50;
// var Conesbought;
//
// do {
//     Conesbought = Math.floor(Math.random() * 5) + 1;
//     amountofCones = amountofCones - Conesbought
//     console.log(Conesbought);
//     console.log(amountofCones);
//     if (amountofCones <= 1) {
//         alert("We have 1 left for sale");
//     } else {
//         alert("We are all out");
//     }
//     } while (amountofCones > 0);


var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBeingBought = Math.floor(Math.random() * 5) + 1;
    if (conesBeingBought > allCones) {
    console.log("Cannot sell you " + conesBeingBought + " I only have " + allCones);
    } else  {
    console.log(conesBeingBought + " cones sold...");
    allCones = allCones - conesBeingBought;
    }
} while (allCones > 0);
console.log("Yay! I sold them all!");










