const chai = require('chai');
const expect = chai.expect; 

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const data = require('../src/data.js');

let card;
let turn;
let dataDetails1;
let dataInfo = data;

beforeEach(function() {
  dataDetails1 = dataInfo.prototypeData[0];
  card = new Card(dataDetails1);
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
