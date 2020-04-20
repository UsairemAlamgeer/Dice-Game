// Getting the scores for both players
var playerOneScore = Math.floor((1+(Math.random()*6)));
var playerTwoScore = Math.floor((1+(Math.random()*6)));
// for player one

if (playerOneScore ===1){
document.querySelector("#playerOne .img1").src="images/dice1.png";
}

if (playerOneScore ===2){
document.querySelector("#playerOne .img1").src="images/dice2.png";
}

if (playerOneScore ===3){
document.querySelector("#playerOne .img1").src="images/dice3.png";
}

if (playerOneScore ===4){
document.querySelector("#playerOne .img1").src="images/dice4.png";
}

if (playerOneScore ===5){
document.querySelector("#playerOne .img1").src="images/dice5.png";
}

if (playerOneScore ===6){
document.querySelector("#playerOne .img1").src="images/dice6.png";
}


// Player 2

if (playerTwoScore ===1){
document.querySelector("#playerTwo .img2").src="images/dice1.png";
}

if (playerTwoScore ===2){
document.querySelector("#playerTwo .img2").src="images/dice2.png";
}

if (playerTwoScore ===3){
document.querySelector("#playerTwo .img2").src="images/dice3.png";
}

if (playerTwoScore ===4){
document.querySelector("#playerTwo .img2").src="images/dice4.png";
}

if (playerTwoScore ===5){
document.querySelector("#playerTwo .img2").src="images/dice5.png";
}

if (playerTwoScore ===6){
document.querySelector("#playerTwo .img2").src="images/dice6.png";
}

if (playerOneScore > playerTwoScore)
{
  document.querySelector("h1").innerHTML="Player One Wins";
}

if (playerOneScore < playerTwoScore)
{
document.querySelector("h1").innerHTML="Player Two Wins";
}

if (playerOneScore === playerTwoScore)
{
document.querySelector("h1").innerHTML="Draw";
}
