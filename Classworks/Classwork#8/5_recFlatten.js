const recFlatten = (arr) => {
  let res = arr.reduce((acc, cur) => {
    Array.isArray(cur) ? (acc = [...acc, ...cur]) : acc.push(cur);
    return acc;
  }, []);
  if (JSON.stringify(arr) == JSON.stringify(res)) {
    return res;
  }

  return recFlatten(res);
};
// console.log(recFlatten([14, [1, [[[3, []]], 1], 0]]));
// console.log(recFlatten([1, [3, 4, [1, 2]], 10]));
