function histogramRec(arr, char) {
  const cur = char.repeat(arr[0]) + "\n";
  if (arr.length === 1) return cur;
  return cur + histogramRec(arr.slice(1), char);
}
// console.log(histogramRec([1, 2, 3, 8, 5], "#"));

function histogramReduce(arr, char) {
  let res = arr.reduce((acc, cur) => {
    acc += char.repeat(cur) + "\n";
    return acc;
  }, "");
  return res;
}
// console.log(histogramReduce([1, 2, 3, 8, 5], "#"));
