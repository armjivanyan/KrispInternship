function partition(arr, start, end) {
  const pivot = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  return arr;
}

// let arr1 = [2, 5, 986, 2, 4, 6, 2, 1, 5, 6, 4];
// console.log(quickSort(arr1, 0, arr1.length - 1));
