const findMax = (arr) => {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
};
// console.log(findMax([1, 10, 2, 2, 3]));
// console.log(findMax([1, 4, 43, -112]));
