const findIndex = (arr, cur = 0, next = 1) => {
  if (next === arr.length) {
    return -1;
  }
  if (arr[cur] <= arr[next]) {
    return findIndex(arr, cur + 1, next + 1);
  }

  return next;
};

// console.log(findIndex([2, 12, 15, 48, 64]));
// console.log(findIndex([-9, -4, -4, 3, 12, 4, 5]));
