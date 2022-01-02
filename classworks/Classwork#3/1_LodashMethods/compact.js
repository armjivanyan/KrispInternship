const compact = (array) => {
  const res = [];

  for (element of array) {
    if (element) {
      res.push(element);
    }
  }

  return res;
};
// console.log(compact([0, 1, false, 2, '', 3]))

const compactAlternative = (array) => {
  return array.filter((element) => element);
};
// console.log(compactAlternative([0, 1, false, 2, "", 3]));
