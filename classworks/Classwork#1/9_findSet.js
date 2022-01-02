const findSet = (arr) => {
  let result = [];

  for (let num of arr) {
    if (result.indexOf(num) === -1) {
      result.push(num);
    }
  }
  
  return result;
};
//   console.log(findSet([1, 2, 3, 3, 2, 5]));
//   console.log(findSet([4, 4]));
