const chunk = (array, size) => {
  const res = [];
  let partition = [];

  for (let i = 0; i < array.length; i++) {
    partition.push(array[i]);

    if (partition.length % size === 0 || i === array.length - 1) {
      res.push(partition);
      partition = [];
    }
  }

  return res;
};
// console.log(chunk(['a', 'b', 'c', 'd'], 2));
// console.log(chunk(['a', 'b', 'c', 'd'], 3));

const chunkAlternative = (array, size) => {
  const res = [];
  let partition = [];

  for (let i = 0; i < array.length; i += size) {
    partition = array.slice(i, i + size);
    res.push(partition);
    partition = [];
  }

  return res;
};
// console.log(chunkAlternative(['a', 'b', 'c', 'd'], 2));
// console.log(chunkAlternative(['a', 'b', 'c', 'd'], 3));
