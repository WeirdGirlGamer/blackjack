"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.Player = void 0;
var Player = /** @class */ (function () {
  function Player() {
    this.hand = [];
    this.balance = 100;
    this.bet = 0;
  }
  //private dealer: boolean;
  /*constructor(dealer: boolean) {
      if (dealer) {
        this.dealer = true;
      } else {
        this.dealer = false;
      }
    } */
  Player.prototype.placeBet = function (bet) {
    if (Number.parseInt(bet) > this.balance) {
      return false;
    } else {
      this.bet = Number.parseInt(bet);
      return true;
    }
  };
  Object.defineProperty(Player.prototype, "Balance", {
    get: function () {
      return this.balance;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Player.prototype, "Bet", {
    get: function () {
      return this.bet;
    },
    enumerable: false,
    configurable: true,
  });
  Player.prototype.addToHand = function (card) {
    if (typeof card == "undefined") {
      console.log("Out of cards. Fix later");
    } else {
      this.hand.push(card);
    }
  };
  Object.defineProperty(Player.prototype, "Hand", {
    get: function () {
      return this.hand;
    },
    enumerable: false,
    configurable: true,
  });
  Player.prototype.showHand = function () {
    for (var i = 0; i < this.hand.length; i++) {
      console.log("Card ".concat(i + 1, ": ").concat(this.hand[i].print()));
    }
    console.log("total: ".concat(this.calcHand()));
  };
  /*checkHand(){
      if(this.calcHand() > 21){
        for(let i = 0; i < this.hand.length; i++){
          if(this.hand[i].number == 1 && this.hand[i].value == 11){
            this.hand[i].flipAce(1);
            if(this.calcHand() <= 21){
              break;
            }
          }
        }
      }
    } */
  Player.prototype.checkHand = function () {
    if (this.calcHand() > 21) {
      //console.log("Above 21")
      for (var i = 0; i < this.hand.length; i++) {
        if (this.hand[i].ace) {
          //console.log("There is an ace causing this.")
          this.hand[i].flipAce(1);
          if (this.calcHand() <= 21) {
            break;
          }
        }
      }
    }
  };
  Player.prototype.calcHand = function () {
    var total = 0;
    for (var i = 0; i < this.hand.length; i++) {
      total += this.hand[i].value;
    }
    return total;
  };
  Player.prototype.clearHand = function () {
    if (this.hand.length > 0) {
      this.hand = [];
    }
  };
  Player.prototype.updateBalance = function (bet, outcome) {
    if (outcome) {
      this.balance += bet;
    } else {
      this.balance -= bet;
    }
  };
  return Player;
})();
export { Player };
