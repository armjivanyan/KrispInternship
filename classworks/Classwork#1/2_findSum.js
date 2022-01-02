const findSum = (arr) => {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
};
// console.log(findSum([1, 12, 4]));
// console.log(findSum([-1, 0, 1, 2]));
// console.log(findSum([]));
// console.log(findSum([-1, 0.4]));
