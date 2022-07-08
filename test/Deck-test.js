const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data.js');

let card1;
let card2;
let card3;
let deck;
let dataInfo = data;

beforeEach(function() {
  let dataDetails1 = dataInfo.prototypeData[0];
  let dataDetails2 = dataInfo.prototypeData[1];
  let dataDetails3 = dataInfo.prototypeData[2];
  card1 = new Card(dataDetails1);
  card2 = new Card(dataDetails2);
  card3 = new Card(dataDetails3);
  deck = new Deck([card1, card2, card3]);
});

describe('Deck', function() {
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  })

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  })

  it('should know how many cards are in a deck', function() {
    expect(deck.countCards()).to.equal(3);
  })
});
