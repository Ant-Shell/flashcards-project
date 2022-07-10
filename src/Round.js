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

  takeTurn(guess) {
    let card = this.returnCurrentCard();
    let currentTurn = new Turn(guess, card)
    let feedbackResult = currentTurn.giveFeedback();
    this.turns++

    if (this.turns === this.deck.cards.length + 1) {
      this.endRound()
    }

    if (feedbackResult === 'Correct!' ) {
      return feedbackResult;
    } else {
      this.incorrectGuesses.push(currentTurn.card.id)
      return feedbackResult;
    }
  }

  calculatePercentCorrect() {
    let correctGuesses = this.turns - this.incorrectGuesses.length;
    let percentCorrect = parseFloat(((correctGuesses / this.turns) * 100).toFixed(2));
    
    return percentCorrect;
  }

  endRound() {
    let percent = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${percent}% of the questions correctly!`)
    return `** Round over! ** You answered ${percent}% of the questions correctly!`
  }
}



module.exports = Round;