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
// var number = Math.floor(Math.random() *6) + 1;
// var guess;
//
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// } while (guess !== number);
//
// alert("Your guess of " + guess + " matches the number " + number + "!");


// For Loops
// var count = 100;
// while (count >= 0){
//     console.log(count);
//     count = count - 1;
// }
for(var count = 100; count >=0; count = count -1){
    console.log(count);
// }
//
// // variable called i for iterator
//
// for (var i = 100; i >=0; i--){
//     console.log(i);
// }
//
// for (var i = 0; i <=100 ; i++){
//     console.log(i);
// }

// var i = 0;
// while (i <100){
//     i++;
//     console.log(i);
// }
//
// for (i = 0 ; i < 100; i++){
//     console.log(i);
// }


var string = "";
for (var i = 0; i < 0; i++){
    var word = prompt("Let's make a sentence!");
    if (word === "curses"){
        console.log("This is a respectable program!");
        break;
    }
    string = string + " " + word;
    console.log(string);
}




