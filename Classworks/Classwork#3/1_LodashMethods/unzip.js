const unzip = (array) => {
  const res = [];

  for (let i = 0; i <= array.length; i++) {
    const subArray = [];

    for (element of array) {
      subArray.push(element[i]);
    }
    res.push(subArray);
  }

  return res;
};
// console.log(unzip([['a', 1, true], ['b', 2, false]]))
