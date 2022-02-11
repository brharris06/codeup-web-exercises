// var groceryList = ["bread", "eggs", "butter", "milk"];
// console.log(groceryList[2]);
// console.log("I have to buy " + groceryList[3]);

//Create an array of four family members, or people or pets you know.
//Console.log the first and last item.

// var familyMembers = ["Shelley", "Brian", "Brehon", "Valerie"];
// console.log(familyMembers[0]);
// console.log(familyMembers[3]);

//Console.log a string stating your relationship to one of the array elements, for example "Nathan is my cousin or "Sofia is my friend."

// console.log(familyMembers[0]+ " is my Mom

// for (var i = 0 ; i < groceryList.length; i++){
//     console.log("At index " + i);
//     console.log(groceryList[i]);
// }

// var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
//
// for (var i = 0; i < cities.length; i++){
//     console.log("The city at index " + (i+1) + " is: " + cities[i]);
// }

// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// prices.forEach(function (price){
//     console.log(price);
// });

// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// prices.forEach(function (price,index){
//     console.log("Item number " + (index + 1) + " costs $" +price);
// }

// groceryList.push("potatoes");
// console.log(groceryList);
// groceryList.pop();
// console.log(groceryList);
//
// groceryList.unshift("sliced cheddar");
// console.log(groceryList);
// groceryList.shift();
// console.log(groceryList);
//
// console.log(groceryList.indexOf("butter"));
//
// var indexOfButter = groceryList.indexOf("butter");
// console.log("The butter is at index " + indexOfButter + ".");
//
// groceryList[2] = "peanut butter";
// console.log(groceryList);
// groceryList[indexOfButter] = "butter";
// console.log(groceryList);

// var firstHalfofList = groceryList.slice(0, 2);
// console.log(firstHalfofList);
// console.log(groceryList);
// var secondHalfofList = groceryList.slice(2);
// console.log(secondHalfofList);
// firstHalfofList.push("peanut butter");
// console.log(firstHalfofList);
// groceryList = firstHalfofList.concat(secondHalfofList);
// console.log(groceryList);
//
// groceryList.reverse();
// console.log(groceryList);
// groceryList.sort();
// console.log(groceryList);


var hamletQuote = "To be or not to be, that is the question";
var noCommasHamletQuote = hamletQuote.replace(",", "").toLowerCase();
var hamletQuoteArray = noCommasHamletQuote.split(" ");
// console.log(hamletQuoteArray);
//
// console.log(hamletQuoteArray);
// hamletQuoteArray.reverse();
// console.log(hamletQuoteArray);

var hamletQuoteBackwards = hamletQuoteArray.join(" ");
console.log(hamletQuoteBackwards);
var hamletQuoteWordList = hamletQuoteArray.join(",");
console.log(hamletQuoteWordList);




