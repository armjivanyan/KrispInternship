const allPairs = (arr, sum) => {
  let res = [];
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > sum / 2) {
      break;
    }
    let tmp = [];
    let target = sum - arr[i];

    if (arr.indexOf(target) !== -1) {
      tmp.push(arr[i], target);
    }
    res.push(tmp);
  }

  return res;
};

console.log(allPairs([2, 3, 4, 5], 7));
console.log(allPairs([5, 3, 9, 2, 1], 3));
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
