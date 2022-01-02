const getPowersInBetween = (start, end) => {
  let current = 1;
  let res = [];

  while (current < start) {
    current *= 2;
  }

  while (current < end) {
    res.push(current);
    current *= 2;
  }

  return res;
};
// console.log(getPowersInBetween(7, 45));
// console.log(getPowersInBetween(0, 150));
