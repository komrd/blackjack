let deck = new Array();
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let values = ["Ace", "2", "3", "4" , "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

function getDeck() {
	let deck = new Array();

	for (let i = 0; i < suits.length; i++) {
		for (let x = 0; x < values.length; x++) {
			let card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}
	return deck;
}

function shuffle() {
    for (let i = 0; i < 1000; i++) {
        let pos1 = Math.floor((Math.random() * deck.length));
        let pos2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[pos1];
        deck[pos1] = deck[pos2];
        deck[pos2] =  tmp;
    }
}

let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

hitButton.style.display = 'none';
stayButton.style.display = 'none';