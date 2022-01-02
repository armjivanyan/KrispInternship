const concatArrays = (arr1, arr2) => {
  let res = [...arr1, ...arr2];
  return res;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
console.log(concatArrays(arr1, arr2));
