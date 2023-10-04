"use strict";

class SearchWord {
  constructor(text) {
    this.text = text.toLowerCase();
  }

  searchQuantity(wordsearch) {
    const words = this.text.split(/[\s,.;!?]+/).filter((word) => word.length > 0);

    const quantity = words.filter((word) => word === wordsearch.toLowerCase()).length;
    return quantity;
  }
}

const text = prompt("Введіть текст");

const wordsearch = "текст";

const posh = new SearchWord(text);
const quantity = posh.searchQuantity(wordsearch);

console.log(`Слово '${wordsearch}' зустрічається у тексті ${quantity} раз`);
