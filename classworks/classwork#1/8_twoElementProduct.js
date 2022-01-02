const twoElementProduct = (arr) => {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result[i - 1] = arr[i] * arr[i - 1];
  }

  return result;
};
// console.log(twoElementProduct([3, 7, 12, 5, 20, 0]));
// console.log(twoElementProduct([1, 1, 4, 32, 6]));
