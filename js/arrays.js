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

var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

prices.forEach(function (price,index){
    console.log("Item number " + (index + 1) + " costs $" +price);
});




