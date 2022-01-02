const concatArray = (arr) => {
  let result = "";

  for (let element of arr) {
    result += element;
  }

  return result;
};
// console.log(concatArray(["hello", ",", " ", "world"]));
// console.log(concatArray(["a", "c", "a"]));
