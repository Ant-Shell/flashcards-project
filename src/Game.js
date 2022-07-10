const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
  }
  
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  createCards() {
    let cards = prototypeQuestions.map((card) => {
      return new Card(card)
    })
    console.log(cards)
    return cards;
  }

  createDeck() {
    let cards = this.createCards();
    let deck = new Deck(cards);
    return deck;
  }

  createRound() {
    let deck = this.createDeck();
    let round = new Round(deck);
    this.currentRound = round;
    return round;
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.createRound();
    this.printMessage(this.currentRound.deck);
    this.printQuestion(this.currentRound);
  }
}


module.exports = Game;