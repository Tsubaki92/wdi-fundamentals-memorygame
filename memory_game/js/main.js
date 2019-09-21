//Writing code for memory card game

//console.log("Up and running!");

//alert('Hello, friends.');

//Array that contain cards
//const cards = ["queen", "queen", "king", "king"];
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage:"images/king-of-diamonds.png" 
}
];


//Array to store the cards user filps
const cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");}
}

//function tell wtich card user flp
function flipCard (cardId){

	console.log("User Flipped " + cards[cardId].rank);
	console.log("User Flipped " + cards[cardId].cardImage);
	console.log("User Flipped " + cards[cardId].suit);
	
	cardsInPlay.push(cards[cardId].rank);

	if(cardsInPlay.length === 2){
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);


