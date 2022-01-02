const mapping = (arr) => {
  let res = {};

  for (let i = 0; i < arr.length; i++) {
    res[arr[i].toLowerCase()] = arr[i].toUpperCase();
  }

  return res;
};

// console.log(mapping(["p", "s"]));
// console.log(mapping(["a", "b", "c"]));
// console.log(mapping(["a", "v", "y", "z"]));
