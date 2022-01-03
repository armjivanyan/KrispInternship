const nonRecSum = (num) => {
  return num % 9 || 9;
};

// console.log(nonRecSum(999999999999));
// console.log(nonRecSum(29));
// console.log(nonRecSum(14));

const getSumOfDigitsRec = (num) => {
  let stringArr = num.toString().split("");
  let sum = stringArr.reduce((acc, cur) => {
    acc += parseInt(cur);
    return acc;
  }, 0);
  return sum >= 10 ? getSumOfDigitsRec(sum) : sum;
};

const getSumOfDigitsRec2 = (num, sum = 0) => {
  if (!num) {
    return sum >= 10 ? getSumOfDigitsRec2(sum) : sum;
  }
  sum += num % 10;
  num = Math.floor(num / 10);
  return getSumOfDigitsRec2(num, sum);
};

// console.log(getSumOfDigitsRec2(999999999999));
// console.log(getSumOfDigitsRec2(29));
// console.log(getSumOfDigitsRec2(14));
