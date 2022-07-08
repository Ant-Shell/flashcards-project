const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

let card1;
let card2;
let card3;
let deck;
let round;
let correctTurn;
let incorrectTurn;

beforeEach(function() {
  card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
  card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
  correctTurn = new Turn('object', card1);
  incorrectTurn = new Turn('function', card2);
});

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  })

  it('should have turns initialized to zero', function() {
    expect(round.turns).to.equal(0);
  })

  it('should have incorrectGuesses initialized to an empty array', function() {
    expect(round.incorrectGuesses).to.be.instanceOf(Array);
    expect(round.incorrectGuesses).to.be.empty;
  })

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  })

  it('should take a turn with correct guess', function() {
    expect(round.takeTurn(correctTurn)).to.equal('Correct!');
  })

  it('should take a turn with incorrect guess and store it', function() {
    expect(round.takeTurn(incorrectTurn)).to.equal('Incorrect!');
    expect(round.incorrectGuesses).to.contain(2);
  })

  it('should increment the number of turns on correct guess', function() {
    round.takeTurn(correctTurn);

    expect(round.turns).to.equal(1);
  })

  it('should increment the number of turns on incorrect', function() {
    round.takeTurn(incorrectTurn);

    expect(round.turns).to.equal(1);
  })

  it('should return current card after turns taken', function() {
    round.takeTurn(correctTurn);
    round.takeTurn(incorrectTurn);

    expect(round.returnCurrentCard()).to.equal(card3);
  })

  it('should calculate and return the percentage of correct guesses', function() {
    round.takeTurn(correctTurn);
    round.takeTurn(incorrectTurn);

    expect(round.calculatePercentCorrect()).to.equal(0.5);
  })

  it('should end the round', function() {
    round.takeTurn(correctTurn);
    round.takeTurn(incorrectTurn);

    expect(round.endRound()).to.equal('** Round over! ** You answered 0.5% of the questions correctly!')
  })

  it('should end the round if no guesses were made', function() {
    expect(round.endRound()).to.equal('** Round over! **')
  })
});