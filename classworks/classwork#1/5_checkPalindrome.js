const checkPalindrome = (str) => {
  if (str.length === 0) {
    return "No";
  }

  while (str.length > 1) {
    if (str[0] === str[str.length - 1]) {
      str = str.slice(1, str.length - 1);
    } else {
      return "No";
    }
  }

  return "Yes";
};
// console.log(checkPalindrome("racecar"));
// console.log(checkPalindrome("T"));
// console.log(checkPalindrome(""));
// console.log(checkPalindrome("palindrome"));
