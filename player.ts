import { Card } from "./card.js";
class Player {
  private hand: Card[] = [];
  private balance: number = 100;
  private bet: number = 0;
  //private dealer: boolean;

  /*constructor(dealer: boolean) {
    if (dealer) {
      this.dealer = true;
    } else {
      this.dealer = false;
    }
  } */

  placeBet(bet: string): boolean {
    if (Number.parseInt(bet) > this.balance) {
      return false;
    } else {
      this.bet = Number.parseInt(bet);
      return true;
    }
  }

  public get Balance(): number {
    return this.balance;
  }
  public get Bet(): number {
    return this.bet;
  }

  addToHand(card: Card | undefined) {
    if (typeof card == "undefined") {
      console.log("Out of cards. Fix later");
    } else {
      this.hand.push(card);
    }
  }
  get Hand(): Card[] {
    return this.hand;
  }

  showHand() {
    for (let i = 0; i < this.hand.length; i++) {
      console.log(`Card ${i + 1}: ${this.hand[i].print()}`);
    }
    console.log(`total: ${this.calcHand()}`);
  }

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

  checkHand() {
    if (this.calcHand() > 21) {
      //console.log("Above 21")
      for (let i = 0; i < this.hand.length; i++) {
        if (this.hand[i].ace) {
          //console.log("There is an ace causing this.")
          this.hand[i].flipAce(1);
          if (this.calcHand() <= 21) {
            break;
          }
        }
      }
    }
  }

  calcHand(): number {
    let total = 0;
    for (let i = 0; i < this.hand.length; i++) {
      total += this.hand[i].value;
    }
    return total;
  }

  clearHand() {
    if (this.hand.length > 0) {
      this.hand = [];
    }
  }

  updateBalance(bet: number, outcome: boolean) {
    if (outcome) {
      this.balance += bet;
    } else {
      this.balance -= bet;
    }
  }
}

export { Player };
