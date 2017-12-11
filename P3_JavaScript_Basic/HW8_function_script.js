//Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order
//Don't actually reverse the array list itself
function printReverse(arr){
	for(var i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c", "d"]);

//Write a function isUniform() that takes an array as an argument and returns true if all elements in the array are identical
function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(first !== arr[i]){
			return false;
		}
	}
	return true;
}
isUniform([1, 1, 1, 1]);
isUniform([2, 1, 1, 1]);
isUniform(["a", "b", "p"]);
isUniform(["b", "b", "b"]);

//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
function sumArray(arr){
	var total = 0;
	arr.forEach(function(e){
		total += e;
	});
	return total;
}
sumArray([1, 2, 3, 4]);
sumArray([10, 3, 10, 4]);
sumArray([-5, 100]);

//Write a function max() that accepts an array of numbers and returns the maximum number in the array
function max(arr){
	var maximum = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > maximum){
			maximum = arr[i];
		}
	}
	return maximum;
}
max([1, 2, 3, 4]);
max([10, 3, 10, 4]);
max([-5, 100]);