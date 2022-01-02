const pickPalindromes = (array) => {
  let res = array.filter(checkAlmostPalindrome);
  return res;
};
const checkAlmostPalindrome = (num) => {
  let str = num + "";
  let chars = str.split("");
  let isOdd = num % 2 === 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars.indexOf(chars[i], i + 1) !== -1) {
      chars[chars.indexOf(chars[i], i + 1)] = null;
      chars[i] = null;
    }
  }
  for (const element of chars) {
    if (element !== null) {
      if (isOdd) {
        isOdd = !isOdd;
        continue;
      }
      return false;
    }
  }
  return true;
};

console.log(pickPalindromes([443, 12, 639, 121, 3232]));
console.log(pickPalindromes([5, 55, 6655, 8787]));
console.log(pickPalindromes([897, 89, 23, 54, 6197, 53342]));
