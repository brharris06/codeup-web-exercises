console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

var pricePerDay = 3;
var daysofLittleMermaid = Number(prompt("How many days are you renting the Little Mermaid?"));
var daysofBrotherBear = Number(prompt("For how many days are you renting Brother Bear?"));
var daysofHercules = Number(prompt("For how many days are you renting Hercules?"));
var total = (daysofLittleMermaid + daysofBrotherBear + daysofHercules) * pricePerDayInDollars;
alert("Your total will be $ + total");

var whatGooglePaysInDollarsPerHour = Number(prompt("How much does Google pay you per hour?"));
var hoursWorkedForGoogle = Number(prompt("How many hours did you work for Google this week?"));
var whatAmazonPaysInDollarsPerHour = Number(prompt("How much does Amazon pay you per hour?"));
var hoursWorkedForAmazon = Number(prompt("How many hours did you work for Amazon this week?"));
var whatFacebookPaysInDollarsPerHour = Number(prompt("How much does Facebook pay you per hour?"));
var hoursWorkedForFacebook = Number(prompt("How many hours did you work for Facebook this week?"));
var myMoneyThisWeek = (whatGooglePaysInDollarsPerHour * hoursWorkedForGoogle) + (whatAmazonPaysInDollarsPerHour * hoursWorkedForAmazon) + (whatFacebookPaysInDollarsPerHour * hoursWorkedForFacebook);
alert("You made " + myMoneyThisWeek + " dollars this week!");

var classNotFull = confirm("Is the class full?");
var noScheduleConflict = confirm("Do you have a schedule conflict?");
var canEnroll = (classNotFull && noScheduleConflict);
alert("It is " + canEnroll + " that you can enroll in this class");






















