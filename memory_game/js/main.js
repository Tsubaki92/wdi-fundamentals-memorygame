//Writing code for memory card game

//console.log("Up and running!");

//alert('Hello, friends.');

//Array that contain cards
const cards = ["queen", "queen", "king", "king"];

//deleted
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardThree);*/

//Array to store the cards user filps
const cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	}else{
		console.log("Sorry, try again.");}
}

//function tell wtich card user flp
function flipCard (cardId){
	//deleted
	// var cardOne = cards[0];
	// var cardTwo = cards[2];

	// cardsInPlay.push(cardOne);
	// cardsInPlay.push(cardTwo);

	// console.log("User Flipped " + cardOne);
	// console.log("User Flipped " + cardTwo);

	console.log("User Flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if(cardsInPlay.length === 2){
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);

