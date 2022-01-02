const findLength = (arr) => {
  let length = 0;

  for (let item in arr) {
    length++;
  }

  return length;
};
// console.log(findLength([1, 12, 4]));
// console.log(findLength([-1, 0, 1, 2]));
// console.log(findLength([]));
// console.log(findLength([-1, 0.4]));
