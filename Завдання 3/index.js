"use strict";

class WordReplacer {
  constructor(initialText, searchWords, replaceWords) {
    this.initialText = initialText;
    this.searchWords = searchWords;
    this.replaceWords = replaceWords;
    this.replacementStats = {};
  }

  replaceWordsInText() {
    let modifiedText = this.initialText;
    for (let i = 0; i < this.searchWords.length; i++) {
      const searchWord = this.searchWords[i];
      const replaceWord = this.replaceWords[i];
      const capitalizedSearchWord = searchWord.charAt(0).toUpperCase() + searchWord.slice(1);
      const capitalizedReplaceWord = replaceWord.charAt(0).toUpperCase() + replaceWord.slice(1);

      while (modifiedText.includes(searchWord) || modifiedText.includes(capitalizedSearchWord)) {
        modifiedText = modifiedText.replace(searchWord, replaceWord);
        modifiedText = modifiedText.replace(capitalizedSearchWord, capitalizedReplaceWord);

        const key = `${capitalizedSearchWord}/${capitalizedReplaceWord}`;
        this.replacementStats[key] = (this.replacementStats[key] || 0) + 1;
      }
    }
    return modifiedText;
  }

  getReplacementStats() {
    return this.replacementStats;
  }
}

const initialText = "Cat runs. Dog runs. Cat jumps.";
const searchWords = ["cat", "dog"];
const replaceWords = ["bird", "fish"];

const wordReplacer = new WordReplacer(initialText, searchWords, replaceWords);
const modifiedText = wordReplacer.replaceWordsInText();
const replacementStats = wordReplacer.getReplacementStats();

console.log("Початковий текст:");
console.log(initialText);
console.log("Текст після заміни:");
console.log(modifiedText);
console.log("Статистика замін:");
for (const key in replacementStats) {
  console.log(`${key} — ${replacementStats[key]}`);
}
