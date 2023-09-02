class Card {
  number: number;
  value: number;
  suit: string;
  name: string;
  ace: boolean;

  constructor(number, suit) {
    this.value = number;
    this.number = number;
    this.suit = suit;
    this.ace = false;
    if (!(number >= 2 && number <= 10)) {
      switch (number) {
        case 1:
          this.name = `Ace of ${this.suit}`;
          this.value = 11;
          this.ace = true;
          break;
        case 11:
          this.name = `Jack of ${this.suit}`;
          this.value = 10;
          break;
        case 12:
          this.name = `Queen of ${this.suit}`;
          this.value = 10;
          break;
        case 13:
          this.name = `King of ${this.suit}`;
          this.value = 10;
          break;
      }
    } else {
      this.name = `${this.number} of ${this.suit}`;
    }
  }

  print() {
    return this.name;
  }

  flipAce(val: number) {
    this.value = val;
  }
}

export { Card };
