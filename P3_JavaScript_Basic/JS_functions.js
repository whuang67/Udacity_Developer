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