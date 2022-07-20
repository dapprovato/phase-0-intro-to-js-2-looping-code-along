// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
         cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        }

    return cards;
}

    writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    let countdown = number;
    while (countdown > -1) {
        console.log(countdown--);
    }
    }
    countDown(12);