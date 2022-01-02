const insertWhitespace = (str) => {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      res += " ";
    }
    res += str[i];
  }

  return res;
};

// console.log(insertWhitespace("SheWalksToTheBeach"));
// console.log(insertWhitespace("MarvinTalksTooMuch"));
// console.log(insertWhitespace("TheGreatestUpsetInHistory"));
