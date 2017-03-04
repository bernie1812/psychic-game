// console.log users input by onkeyup
// create an array of five letters
// create a random number generator between 0 and length of letters..var random...
// var guesses=array
// var...wins, losses, guesses, number of guesses
// if/else statement to compare and evaluate the guess
// if guess is wrong...increase #og guesses by 1 and store guess in guesses array
// if guess is correct..increase wins by 1 and create reset function to clear all the guesses
//first function creat oneupkey
//second function compare...if/else
// third reset function
//console.log every step
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var userGuesses = 0;
var guessesLeft = 10;  

// here we are capturing users input
document.onkeyup = function() {
	var userGuesses=String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuesses);