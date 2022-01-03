const minimalPositive = (arr, i = 0, min = -1) => {
  if (i === arr.length) {
    return min;
  }
  if (arr[i] >= 0 && (min < 0 || arr[i] < min)) {
    return minimalPositive(arr, i + 1, arr[i]);
  }

  return minimalPositive(arr, i + 1, min);
};

// console.log(minimalPositive([56, -9, 87, -23, 0, -105, 55, 1]));
// console.log(minimalPositive([45, -9, 15, 5, -78]));
// console.log(minimalPositive([-5, -9, -111, -1000, -7]));
