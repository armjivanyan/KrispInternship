const concat = (array, ...values) => {
  const res = [...array];

  for (let element of values) {
    if (!Array.isArray(element)) {
      res.push(element);
    } else {
      for (let insideElement of element) {
        res.push(insideElement);
      }
    }
  }

  return res;
};
// console.log(concat([1], 2, [3], [[4]]));

const concatAlternative = (array, ...values) => {
  return [...array, ...values];
};
// console.log(concatAlternative([1], 2, [3], [[4]]));
