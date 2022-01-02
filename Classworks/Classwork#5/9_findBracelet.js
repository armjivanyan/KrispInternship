function findBracelet(arr) {
  for (let i = 2; i <= arr.length / 2; i++) {
    if (arr.length % i === 0) {
      let res = true;

      for (let j = 0; j < i; j++) {
        for (let k = j + i; k < arr.length; k += i) {
          if (arr[j] != arr[k]) {
            res = false;
            break;
          }
        }
      }
      if (res) {
        return res;
      }
    }
  }
  return false;
}

// console.log(findBracelet([1, 2, 2, 1, 2, 2]));
// console.log(findBracelet([5, 1, 2, 2]));
// console.log(findBracelet([5, 5, 5]));
// console.log(findBracelet([4, 4, 3, 4, 4, 4, 4, 3, 4, 4]));
