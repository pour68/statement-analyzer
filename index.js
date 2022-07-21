const analyzeStatement = (statement) => {
  const chars = statement.split("");
  const allWords = statement.split(" ");
  const newLines = statement.match(/\n/g) || [];

  return {
    characters: chars.length,
    words: allWords.length,
    lines: newLines.length,
  };
};

console.log(analyzeStatement("this is some text thats\n great"));
