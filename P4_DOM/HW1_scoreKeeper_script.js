var btn1 = document.querySelector("#playerOne");
var btn2 = document.querySelector("#playerTwo");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var stopScore = document.querySelector("p span");
var resetButton = document.getElementById("reset");
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var winningScore = 5;

btn1.addEventListener("click", function(){
	if(!gameOver){
		playerOneScore++;
		if(playerOneScore === winningScore){
			gameOver = true;
			p1Display.style.color = "green";
		}
		p1Display.textContent = playerOneScore;
	} else{
		gameOver = true;
	}
});

btn2.addEventListener("click", function(){
	if(!gameOver){
		playerTwoScore++;
		if(playerTwoScore === winningScore){
			gameOver = true;
			p2Display.style.color = "green";
		}
		p2Display.textContent = playerTwoScore;
	}
});

function reset(){
	playerOneScore = 0;
	playerTwoScore = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
}

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function(){
	stopScore.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});