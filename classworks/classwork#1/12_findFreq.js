const findFreq = (arr) => {
  let freq = {};

  for (let num of arr) {
    freq[num] = !freq[num] ? 1 : freq[num] + 1;
  }

  for (let key in freq) {
    console.log(`${key} : ${freq[key] / arr.length}`);
  }
};
// findFreq([1, 1, 2, 2, 3]);
// findFreq([4, 4]);
// findFreq([1, 2, 3]);
