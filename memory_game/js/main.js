
//array of objects
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

//empty array 
const randomCards = [] ;


// this function create random numbers from 1 to 4 to load random cards
// assign the new elements to randomCards array end empty cards array
// copy randomCards array elements to cards arrsy by pushing its elements to cards
function createRandom(){

	while(cards.length !== 0){
		var randomIndex = Math.floor(Math.random() * cards.length);
		randomCards.push(cards[randomIndex]);
		cards.splice(randomIndex , 1);
	};
	console.log(cards.length);
	console.log(randomCards.length);

	var i= randomCards.length;
	while(randomCards.length !== 0){

		i= randomCards.length -1;
		cards.push(randomCards[i]);
		randomCards.splice(i , 1);
		
	};
	console.log(cards.length);
	console.log(randomCards.length);
}

//empty array will contain the two flipped cards
const cardsInPlay = [];

//function display message to user and sum score 
var score = 0;
function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		score += 10;
		alert("You found a match!" + "\nYour Score: " + score);
	}else{
		score -= 5;
		alert("Sorry, try again." + "\nYour Score: " + score);
	}
}

//function tell wtich card user flipped
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
		document.querySelector('button').addEventListener('click', resetGame);
	}
}


//This function will create a new game board.
function createBoard (){

	document.getElementById('game-board').innerHTML = "";

	for (var i = 0; i < cards.length ; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
//This function will create timed new game board
function displayCards (){

	createRandom();

	for (var i = 0; i < cards.length ; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', cards[i].cardImage);
		document.getElementById('game-board').appendChild(cardElement);
	}
	//timer
	setTimeout("createBoard()",500);
}

alert("Hello\nYou have 1 second to see cards\nMatch: score + 10\nNot matce: score - 5");
displayCards();

// function will reset cards 
function resetGame(){
	document.getElementById('game-board').innerHTML = "";

	while( cardsInPlay.length !== 0 ){
		cardsInPlay.pop();
	};
	displayCards();
}



