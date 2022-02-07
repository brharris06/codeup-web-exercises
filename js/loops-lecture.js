// // var slices = 4;
// // while(slices > 0) {
// //     console.log("I'll have a slice!");
// //     slices = slices - 1;
// //     console.log("Now there's " + slices + " left");
// // }
// // console.log("Awwwwwww........ no more pizza :( ");
//
//
// // var counter = 0;
// // while(counter <= 100){
// //     console.log(counter);
// //     // counter = counter + 1;
// //     counter ++;
// // }
//
// // var counter = 100;
// // while(counter >= 0){
// //     console.log(counter);
// //     counter --;
// // }
//
// var counter = 1;
// var number = 5;
// while (counter <=5){
//     number = number * 2;
//     console.log(number);
//     counter = counter + 1;
// }

// Do-while
var number = Math.floor(Math.random() *6) + 1;
var guess;

do {
    guess = parseInt(prompt("Enter a number between 1 and 6"));
} while (guess !== number);

alert("Your guess of " + guess + " matches the number " + number + "!");
