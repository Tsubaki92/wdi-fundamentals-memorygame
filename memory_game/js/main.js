//console.log("Up and running!");

//alert('Hello, friends.');

const cards = ["queen", "queen", "king", "king"];

//deleted
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardThree);*/

const cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardTwo);

if(cardsInPlay === 2){

}

if(cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
}else{
	alert("Sorry, try again.");
}