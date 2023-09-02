import { Card } from "./card.js";
import { Deck } from "./deck.js";
import { Player } from "./player.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

/* const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
}); */
const prompt = require("prompt-sync")();

/* for (let i = 1; i < 14; i++) {
  const card = new Card(i, "Clubs");
  card.print();
} */

/*const deck = new Deck();
deck.print();
deck.shuffle();
deck.print(); */

let play = true;
const player = new Player();

while (play) {
  player.clearHand();
  let bet = "";
  const dealer = new Player();
  let betting = false;
  console.log(`Your balance is $${player.Balance}`);
  while (!betting) {
    console.log("Please enter a bet");
    bet = Number.parseInt(prompt(""));
    betting = player.placeBet(bet);
    if (!betting) {
      console.log(
        `Please enter a bet less than $${player.Balance}\nPlease make sure there are no letters or spaces in your input`
      );
    }
  }
  console.log(`Bet placed: $${player.Bet}`);
  const deck = new Deck();
  deck.shuffle();
  //deck.print();
  console.log("Dealing hand...");
  deck.deal(player, 2);
  deck.deal(dealer, 2);

  console.log("Dealers hand:");
  dealer.checkHand();
  dealer.showHand();
  console.log("\n");
  console.log("Your hand:");
  player.checkHand();
  player.showHand();
  //start here
  //work on stand conditions
  //go over bj rules again
  //going good so far!
  //almost done very proud!
  let gameEnd = false;
  let dealerStand = false;
  while (
    (!(dealer.calcHand() >= 21) || !(player.calcHand() >= 21)) &&
    !gameEnd
  ) {
    if (dealer.calcHand() == 21 || player.calcHand() > 21) {
      console.log("Dealer wins! Play again? (yes/no)");
      gameEnd = true;
      player.updateBalance(bet, false);
    } else if (player.calcHand() == 21 || dealer.calcHand() > 21) {
      console.log("You win! Play again? (yes/no)");
      gameEnd = true;
      player.updateBalance(bet, true);
    } else {
      let HS = "";
      while (HS != "hit" && HS != "stand") {
        console.log("Hit or Stand? (hit/stand)");
        HS = prompt("");
        if (HS == "hit") {
          deck.deal(player, 1);
          player.checkHand();
          console.log("\n");
          player.showHand();
        } else if (HS == "stand") {
          while (dealer.calcHand() < 17) {
            deck.deal(dealer, 1);
            dealer.checkHand();
          }
          console.log("\nDealer's Hand:");
          dealer.showHand();
          if (dealer.calcHand() > 21) {
            console.log("You win! Play again? (yes/no)");
            gameEnd = true;
            player.updateBalance(bet, true);
          } else if (dealer.calcHand() == 21) {
            console.log("Dealer wins! Play again? (yes/no)");
            gameEnd = true;
            player.updateBalance(bet, false);
          } else {
            dealerStand = true;
          }
          //dealerStand = true;
          break;
        } else {
          console.log("Please check your entry for typos or extra spaces");
        }
      }
      //fix this
      if (dealerStand) {
        let pTotal = 21 - player.calcHand();
        let dTotal = 21 - dealer.calcHand();
        if (pTotal < dTotal) {
          console.log("You win! Play again? (yes/no)");
          gameEnd = true;
          player.updateBalance(bet, true);
        } else if (pTotal > dTotal) {
          console.log("Dealer wins! Play again? (yes/no)");
          gameEnd = true;
          player.updateBalance(bet, false);
        } else {
          console.log("Tie! Play again? (yes/no)");
        }
      }
    }
    if (gameEnd) {
      let PA = "";
      while (PA != "yes" && PA != "no") {
        PA = prompt();
        if (PA == "yes") {
          if (player.Balance < 1) {
            console.log("You are out of money!");
            play = false;
            break;
          }
          play = true;
          break;
        } else if (PA == "no") {
          play = false;
          break;
        } else {
          console.log("Please check for typos and extra spaces");
        }
      }
    }
  }
}
console.log("Goodbye!");
