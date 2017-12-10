// This is an exercise that mainly focuses on the usages of prompt, alert and console.log
var secretNumber = 4;
var guess = Number(prompt("Guess a number:"));
if(guess === secretNumber){
	alert("You got it right!");
}
else if(guess > secretNumber){
	alert("Too High! Guess again!!");
}
else{
	alert("Too low! Guess again!!");
}