class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    let guess = this.guess;
    return guess;
  }

  returnCard() {
    let card = this.card;
    return card;
  }

  evaluateGuess() {
    let correctAnswer = this.card['correctAnswer'];
    if (this.guess === correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    let evaluation = this.evaluateGuess()
    if (evaluation === true) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}


module.exports = Turn;
