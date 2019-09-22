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

//function tell wtich card user flip
function flipCard (){

	//this = cardElement = element the user clicked
	var cardId = this.getAttribute('data-id');

	console.log("User Flipped " + cards[cardId].rank);
	console.log("User Flipped " + cards[cardId].cardImage);
	console.log("User Flipped " + cards[cardId].suit);
	
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if(cardsInPlay.length === 2){
		checkForMatch();
		resetGame();
	}
}
//This function will create a new game board.
function createBoard (){

	for (var i = 0; i < cards.length ; i++) {
		var cardElement = document.createElement('img')
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetGame (){
	document.querySelector('button').addEventListener('click', createBoard);
}
createBoard();
//flipCard(0);
//flipCard(2);


