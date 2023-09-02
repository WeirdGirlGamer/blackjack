"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.Deck = void 0;
//var card_js_1 = require("./card.js");
import { Card } from "./card.js";
var Deck = /** @class */ (function () {
  function Deck() {
    this.deck = [];
    var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    for (var i = 0; i < suits.length; i++) {
      for (var j = 1; j <= 13; j++) {
        this.deck.push(new Card(j, suits[i]));
      }
    }
  }
  Deck.prototype.print = function () {
    for (var i = 0; i < this.deck.length; i++) {
      this.deck[i].print();
    }
  };
  Deck.prototype.shuffle = function () {
    function shuffleArr(ourDeck) {
      ourDeck.sort(function () {
        return Math.random() - 0.5;
      });
    }
    shuffleArr(this.deck);
    shuffleArr(this.deck);
  };
  Deck.prototype.deal = function (player, count) {
    for (var i = 1; i <= count; i++) {
      player.addToHand(this.deck.pop());
    }
  };
  return Deck;
})();
export { Deck };
