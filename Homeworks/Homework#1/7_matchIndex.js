const findMaxAndMin = (arr, placeToStore) => {
  placeToStore[0] = arr[0];
  placeToStore[1] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < placeToStore[0]) {
      placeToStore[0] = arr[i];
    }
    if (arr[i] > placeToStore[1]) {
      placeToStore[1] = arr[i];
    }
  }
};

const matchIndex = (arr) => {
  let res = [];
  let interval = [];

  findMaxAndMin(arr, interval);

  let range = interval[1] - interval[0];

  for (let i = 0; i <= range; i++) {
    if (i > interval[1]) {
      break;
    }
    if (arr.indexOf(i + interval[0]) !== -1) {
      res[i] = i + interval[0];
    } else {
      res[i] = undefined;
    }
  }
  return res;
};
// console.log(matchIndex([4,3,0,9]));
// console.log(matchIndex([26, 30, 19, 5]));
