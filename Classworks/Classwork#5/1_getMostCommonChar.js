const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((acc, fn) => fn(acc), data);

const strToArr = (str) => str.split("");

const arrToObj = (arr) =>
  arr.reduce((acc, cur) => {
    acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

const getMaxChar = (obj) => {
  let max = 0;
  let result;

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      result = key;
    }
  }

  return result;
};

const str = "aaaabbbccdddddddddd";
const getMax = compose(getMaxChar, arrToObj, strToArr);
console.log(getMax(str));
