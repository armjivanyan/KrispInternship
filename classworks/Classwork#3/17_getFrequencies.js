const getFrequencies = (arr) => {
  let res = {};

  for (let i = 0; i < arr.length; i++) {
    if (!res.hasOwnProperty(arr[i]) && res[arr[i]] === undefined) {
      res[arr[i]] = 1;
    } else {
      res[arr[i]] += 1;
    }
  }

  return res;
};

console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([1, 2, 3, 3, 2]));
console.log(getFrequencies([true, false, true, false, false]));
console.log(getFrequencies([]));
