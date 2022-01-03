function binarySearch(sortedArr, key) {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (sortedArr[middle] === key) {
      return middle;
    } else if (sortedArr[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// console.log(binarySearch([11, 12, 21, 23, 40, 40, 42, 43, 54, 57, 92], 40));
