var button_ = document.querySelector("button");
var paragraph_ = document.querySelector("p");

button_.addEventListener("click", function(){
	paragraph_.textContent = "Someone clicked the button!";
	document.body.classList.toggle("big");
});


var h1 = document.querySelector("h1");
function changeText(){
	//alert("h1 was clicked!");
	h1.style.background = "orange";
}
h1.addEventListener("click", changeText);


document.querySelector("ul").addEventListener("click", function(){
	console.log("You clicked ul!");
});

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}
