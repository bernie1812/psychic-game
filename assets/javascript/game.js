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
// var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var wins = 0;
// var losses = 0;
// var userGuesses = 0;
// var guessesLeft = 10;  

// // here we are capturing users input
// document.onkeyup = function() {
// 	var userGuesses=String.fromCharCode(event.keyCode).toLowerCase();

// 	console.log(userGuesses);
var options=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var wins = 0;
  var losses=0;
  var guessesLeft=10;  
  var guessesSoFar=[];
  //Capture user key click

 	document.onkeyup=function() {
 		var userGuess=String.fromCharCode(event.keyCode).toLowerCase();
 		guessesSoFar.push(userGuess);
 		document.querySelector('#guessesSoFar').innerHTML=guessesSoFar;

 		console.log(userGuess);
    
    //random letter chosen from options array

  		var computerGuess=options[Math.floor(Math.random()*options.length)];

  		console.log(computerGuess); 

      //compare users guess to computers guess

      //If user guesses the computer guess, wins are increased by 1 and # of guesses is reset to 10 - if not,# of guesses left is decreased by 1 until reaching zero then losses increased by 1 and guesses reset to 10

      if(userGuess===computerGuess){
      	wins++;
      	console.log(wins);
      	guessesLeft=10;
      	console.log(guessesLeft);
      }

      else {
      	if(guessesLeft>0){
	       guessesLeft--;
	      	console.log(guessesLeft);
	      }
	      else{
	     	losses++;
	      	console.log(losses);
	        guessesLeft=10;
	        console.log(guessesLeft);
	      }

	    }

	     var html="<p>Guess what letter I am thinking of </p><p>Wins: "+wins +"</p><p>Losses:"+losses +"</p>" + "<p> Guesses Left:"+guessesLeft+"</p>";

	     document.querySelector('#game').innerHTML=html;

    }