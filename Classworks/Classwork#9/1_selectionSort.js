function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

let arr1 = [1, 5, 7, 6, 2, 1, 5, 6, 3, 5, 4, 9898, 52];
console.log(selectionSort(arr1));
