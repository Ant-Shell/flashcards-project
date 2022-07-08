const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    let index = this.turns;
    let currentCard = this.deck.cards[index];
    return currentCard;
  }

  takeTurn(turn) {
    let feedbackResult = turn.giveFeedback();
    if(feedbackResult === 'Correct!' ) {
      this.turns++
      return feedbackResult;
    } else {
      this.turns++
      this.incorrectGuesses.push(turn.card.id)
      return feedbackResult;
    }
  }
}


module.exports = Round;