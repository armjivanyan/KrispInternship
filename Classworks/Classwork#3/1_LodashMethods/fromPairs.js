const fromPairs = (pairs) => {
  const res = {};

  for (element of pairs) {
    res[element[0]] = element[1];
  }

  return res;
};
// fromPairs([['a', 1], ['b', 2]]);
