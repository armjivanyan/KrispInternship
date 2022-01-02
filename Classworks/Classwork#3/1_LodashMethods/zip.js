const zip = (...arrays) => {
  const res = [];

  for (let i = 0; i < arrays[0].length; i++) {
    const subArray = [];

    for (element of arrays) {
      subArray.push(element[i]);
    }
    res.push(subArray);
  }

  return res;
};

// console.log(zip(["a", "b"], [1, 2], [true, false], [1, 2]));
