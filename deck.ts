import { Card } from "./card.js";
import { Player } from "./player.js";
class Deck {
  deck: Card[] = [];

  constructor() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 1; j <= 13; j++) {
        this.deck.push(new Card(j, suits[i]));
      }
    }
  }

  print() {
    for (let i = 0; i < this.deck.length; i++) {
      this.deck[i].print();
    }
  }

  shuffle() {
    function shuffleArr(ourDeck) {
      ourDeck.sort(() => Math.random() - 0.5);
    }
    shuffleArr(this.deck);
    shuffleArr(this.deck);
  }

  deal(player: Player, count: number) {
    for (let i = 1; i <= count; i++) {
      player.addToHand(this.deck.pop());
    }
  }
}

export { Deck };
