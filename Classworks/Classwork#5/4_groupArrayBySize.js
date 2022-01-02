function group(arr, size) {
  let result = [];
  let step = Math.ceil(arr.length / size);
  for (let i = 0; i < step; i++) {
    let subArray = [];
    for (let j = i; j < arr.length; j += step) {
      subArray.push(arr[j]);
    }
    result.push(subArray);
  }
  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(group(arr, 3));
