// Write a function isEven() which takes a single numeric argument and return true if the number is even, and false otherwise.
function isEven(val){
	return val % 2 === 0;
}
isEven(4);
isEven(21);
isEven(68);
isEven(333);

// Write a function factorial() which takes a single numeric argument and returns the factorial of that number.
function factorial(val){
	result = 1;
	for(i=1; i<=val; i++){
		result *= i;
	}
	return result;
}
factorial(5);
factorial(2);
factorial(10);
factorial(0);

// Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake-cased version.
function kebabToSnake(str){
	var newStr = str.replace(/-/g, "_"); // regular expression is used here. 
	return newStr;
}
kebabToSnake("hello-world");
kebabToSnake("dogs-are--awesome");
kebabToSnake("blah");