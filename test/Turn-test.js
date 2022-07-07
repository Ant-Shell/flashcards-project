const chai = require('chai');
const expect = chai.expect; 

const Turn = require('../src/Turn');
const Card = require('../src/Card');

let card;
let turn;

beforeEach(function() {
  card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  turn = new Turn('object', card);
});

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it('should store a guess and a card', function() {
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.equal(card);
  })

  it('should return a guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  })

  it('should return a card', function() {
    expect(turn.returnCard()).to.equal(card);
  })

  it('should verify guess is correct', function() {
    expect(turn.evaluateGuess()).to.equal(true)
  })

  it('should verify guess is incorrect', function() {
    turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false)

  })

  it('should give feedback for correct answer', function() {
    expect(turn.giveFeedback()).to.equal('Correct!');
  })

  it('should give feedback for incorrect answer', function() {
    turn = new Turn('boolean', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!')
  })
});