"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.Card = void 0;
var Card = /** @class */ (function () {
  function Card(number, suit) {
    this.value = number;
    this.number = number;
    this.suit = suit;
    this.ace = false;
    if (!(number >= 2 && number <= 10)) {
      switch (number) {
        case 1:
          this.name = "Ace of ".concat(this.suit);
          this.value = 11;
          this.ace = true;
          break;
        case 11:
          this.name = "Jack of ".concat(this.suit);
          this.value = 10;
          break;
        case 12:
          this.name = "Queen of ".concat(this.suit);
          this.value = 10;
          break;
        case 13:
          this.name = "King of ".concat(this.suit);
          this.value = 10;
          break;
      }
    } else {
      this.name = "".concat(this.number, " of ").concat(this.suit);
    }
  }
  Card.prototype.print = function () {
    return this.name;
  };
  Card.prototype.flipAce = function (val) {
    this.value = val;
  };
  return Card;
})();
export { Card };
