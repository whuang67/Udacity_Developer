var todos = [];

var input = prompt("What would like to do?");

while(input != "quit"){
	if(input === "list"){
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
	} else if(input === "new"){
		var newTodo = prompt("Enter new todo.");
		todos.push(newTodo);
    } else if(input == "delete"){
		var index = prompt("Enter the index of todo to delete:");
		// splice()
		todos.splice(index, 1);
	}
	input = prompt("What would like to do?");
}
console.log("OK, you quit the app.")