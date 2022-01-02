const compose =
  (...fns) =>
  (data) =>
    fns.reduceRight((acc, fn) => fn(acc), data);
const isEven = (n) => n % 2 === 0;

const filterArr = (arr) => arr.filter(isEven);

const getSum = (arr) => arr.reduce((acc, curr) => (acc += curr), 0);

const printResult = (result) => `The result is ${result}`;

const arr = [8, 4, 6, 9, 12];

const getSumOfEvens = compose(printResult, getSum, filterArr);

console.log(getSumOfEvens(arr));
