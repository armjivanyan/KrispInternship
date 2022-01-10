const getSumsOfArrays = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    res.push(sum);
  }
  return res;
};

// console.log(getSumsOfArrays([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
// console.log(getSumsOfArrays([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,
// -1]]));
// console.log(getSumsOfArrays([[1], [2], [3], [4]]));
