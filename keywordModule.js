function findKeywords(text, word) {
    const regex = new RegExp(word, 'gi');
    const matches = text.match(regex);
    console.log(`Found ${matches ? matches.length : 0} occurrences of '${word}' in the text.`);
  }
  
  module.exports = {
    findKeywords,
  };