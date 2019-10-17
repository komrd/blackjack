var deck = new Array();
var suits = ["clubs", "diamonds", "hearts", "spades"]
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

function getDeck() {
    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < values.length; j++) {
            var card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}