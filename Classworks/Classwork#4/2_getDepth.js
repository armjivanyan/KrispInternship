const depth = (arr) =>
  Array.isArray(arr) ? 1 + Math.max(...arr.map(depth)) : 0;

console.log(depth([1, [2, [3, [4]]]]));
