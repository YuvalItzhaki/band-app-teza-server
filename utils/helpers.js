export function isEven(year) {
  return year % 2 === 0;
}

export function analyzeText(text) {
  const capitalWords = (text.match(/\b[A-Z][a-zA-Z]*\b/g) || []).length;
  const wordsWithNumbers = (text.match(/\b\w+\d+\w*\b/g) || []).length;

  return { capitalWords, wordsWithNumbers };
}
