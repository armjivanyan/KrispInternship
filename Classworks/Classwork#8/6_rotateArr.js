const rotateArr = (arr, num, i = 0) => {
  if (num < 0) {
    num = arr.length + num;
  }
  if (i === num) {
    return arr;
  }

  arr.push(arr.shift());
  return rotateArr(arr, num, i + 1);
};
console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
