// Use .push() to add to the end of an array:
var colors = ["red", "orange", "blue"];
colors.push("green");  // ["red", "orange", "blue", "green"]


// Use .pop() to remove the last item in an array:
var colors = ["red", "orange", "blue"];
colors.pop();          // ["red", "orange"]
var col = colors.pop() //orange


// Use .unshift() to add to the front of an array:
var colors = ["red", "orange", "blue"];
colors.unshift("infrared");  // ["infrared", "red", "orange", "blue"]


// Use .shift() to remove the first item in an array:
var colors = ["red", "orange", "blue"];
colors.shift();           //["orange", "blue"]
var col = colors.shift()  //orange


// Use .indexOf() to find the index of an item in an array:
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];
friends.indexOf("David");    //2
friends.indexOf("Liz");      //1, not 4 (The first one that can be found)
friends.indexOf("Hagrid");   //-1, if the element is not present in the array


// Use .slice() to copy parts of an array:
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); //["Orange", "Lemon"]
var nums = [1, 2, 3];
var otherNums = nums.slice();    //Copy the entire array


// To loop over an array using a For loop, we need to make use of the array's length property:
var colors = ["red", "orange", "yellow", "green"];
for(var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}


// JavaScript provides an easy built-in way of iterating over an array: .forEach()
// Usage: arr.forEach(function(value, index, array)); 
var colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(color){
	console.log(color);
});


// Exercise of For loop and forEach():
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function(num){
	if(num % 3 ==0){
		console.log(num);
	}
});
for(var i = 0; i < numbers.length; i++){
	if(numbers[i] % 3 == 0){
		console.log(numbers[i]);
	}
}


// Build our own forEach function called myForEach()
function myForEach(arr, func){
	for(var i = 0; i < arr.length; i++){
		func(arr[i]);
	}
}
var colors = ["red", "orange", "yellow"];
myForEach(colors, alert);
myForEach(colors, function(){
	console.log("I'm a function!");
});
myForEach(colors, function(color){
	console.log("Hi! " + color);
});

Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++){
		func(this[i]);
	}
}
var friends = ["Charlie", "Dave", "Maddy", "Caitlin"];
friends.myForEach(alert);
friends.myForEach(function(name){
	console.log("I love " + name);
});


// Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties.
var movies = [
    {title: "In Bruges", hasWatched: true, rating: 5},
	{title: "Frozen", hasWatched: false, rating: 4.5},
	{title: "Mad Max Fury Road", hasWatched: true, rating: 5},
	{title: "Les Miserables", hasWatched: false, rating: 3.5}
]
function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "seen ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - " + movie.rating + " stars";
	return result;
}
movies.forEach(function(movie){
	console.log(buildString(movie));
});


// Add methods to an object
var obj = {
	name: "Chuck", 
	age: 45,
	isCool: false,
	friends: ["Bob", "Tina"],
	add: function(x, y){
		return x + y;
	}
}
obj.add(5, 10);
