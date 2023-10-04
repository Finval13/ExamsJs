"use strict";

class SearchWord {
  constructor(text) {
    this.words = text
      .toLowerCase()
      .split(/[\s,.;!?]+/)
      .filter((word) => word.length > 0);
  }

  searchQuantity(wordsearch) {
    const quantity = this.words.filter((word) => word === wordsearch.toLowerCase()).length;
    return quantity;
  }
}

const text = prompt("Введіть текст");
const wordsearch = ["слово", "текст", "знаки"];

const posh = new SearchWord(text);

wordsearch.forEach((word) => {
  const quantity = posh.searchQuantity(word);
  console.log(`Слово '${word}' зустрічається у тексті ${quantity} раз(и)`);
});
