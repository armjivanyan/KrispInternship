const intersection = (...arrays) => {
  const res = [];

  for (element of arrays[0]) {
    let include = true;

    for (let i = 1; i < arrays.length; i++) {
      if (arrays[i].indexOf(element) === -1) {
        include = false;
        break;
      }
    }

    if (include && res.indexOf(element) === -1) {
      res.push(element);
    }
  }

  return res;
};
// console.log(intersection([2, 1], [2, 3]));
