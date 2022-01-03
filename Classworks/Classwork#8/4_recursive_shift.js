const recShift = (arr, i = 1, res = []) => {
  if (i >= arr.length) {
    arr = res;
    return arr;
  }

  res.push(arr[i]);
  return recShift(arr, i + 1, res);
};
// console.log(recShift([6, 78, "n", 0, 1]));
// console.log(recShift([6]));
// console.log(recShift([]));
