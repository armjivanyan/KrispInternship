const findSubsets = (arr) => {
  let i1 = 0;
  let i2 = 1;
  let i3 = 2;
  let res = [];
  if (arr.length < 3) {
    return arr;
  }
  while (true) {
    let subset = [arr[i1], arr[i2], arr[i3]];
    res.push(subset);
    if (i3 + 1 < arr.length) {
      i3++;
      continue;
    } else if (i2 + 1 < arr.length - 1) {
      i2++;
      i3 = i2 + 1;
    } else if (i1 + 1 < arr.length - 2) {
      i1++;
      i2 = i1 + 1;
      i3 = i2 + 1;
    } else {
      break;
    }
  }
  return res;
};
// console.log(findSubsets([4]));
// console.log(findSubsets([19,6]));
// console.log(findSubsets([5, 9, 23, 0, -2, -1]));
