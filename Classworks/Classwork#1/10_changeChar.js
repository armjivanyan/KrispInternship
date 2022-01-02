const changeChar = (str, a, b) => {
  let result = "";

  for (let char of str) {
    result += char === a ? b : char;
  }

  return result;
};

// console.log(changeChar("The results are not recorded yet", "t", "w"));
// console.log(changeChar("does the following code", "o", "0"));
