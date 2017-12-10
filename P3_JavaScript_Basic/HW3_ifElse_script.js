// This is an exercise that mainly focuses on the usages of prompt, alert and console.log
var age = prompt("How old are you?");
if(age < 0){
	console.log("Error!");
}
if(age == 21){
	console.log("Happy 21st birthday!!");
}
if(age % 2 == 1){
	console.log("Your age is odd!");
}
if(age % Math.sqrt(age) == 0){
	console.log("Your age is a perfect square!");
}