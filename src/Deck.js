class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards() {
    let addedCards = this.cards.length;
    return addedCards;
  }
}


module.exports = Deck;