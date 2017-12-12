var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;
setInterval(function(){
	if(isBlue){
		body.style.background = "white";
	} else{
		body.style.background = "#3498DB";
	}
	isBlue = !isBlue;
}, 1000);


// var li = document.querySelector("#highlight");
// var li = document.querySelector(".bolded");     Only get the very first match, return only one element.
// var li = document.querySelectorAll(".bolded");  Return everything that has "bolded" class.

var tag = document.getElementById("highlight");
tag.style.fontSize = "30px";
tag.style.background = "yellow";

// var tags = document.getElementsByClassName("bolded");
// var tags = document.getElementsByTagName("li");

// var p = document.querySelector("p");
// p.classList.add("big");
// p.classList.remove("big");
// p.classList.toggle("big");
// p.textContent;
// p.innerHTML;

// var link = document.querySelector("a");
// link.getAttribute("href");
// link.setAttribute("href", "https://www.dogs.com/");

// var img = document.querySelector("img");
// img.setAttribute("srcset", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g");
