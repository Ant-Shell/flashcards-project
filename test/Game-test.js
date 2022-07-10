const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const data = require('../src/data.js');
const Game = require('../src/Game');

let card1;
let card2;
let card3;
let deck;
let round;
let dataInfo = data;
let dataDetails1;
let dataDetails2;
let dataDetails3;
let game;

beforeEach(function() {
  dataDetails1 = dataInfo.prototypeData[0];
  dataDetails2 = dataInfo.prototypeData[1];
  dataDetails3 = dataInfo.prototypeData[2];
  card1 = new Card(dataDetails1);
  card2 = new Card(dataDetails2);
  card3 = new Card(dataDetails3);
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
  game = new Game();
  correctTurn = new Turn('object', card1);
  incorrectTurn = new Turn('function', card2);
});


describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  })

  it('should be a function', function() {
    expect(game.start).to.be.a('function');
  })

});