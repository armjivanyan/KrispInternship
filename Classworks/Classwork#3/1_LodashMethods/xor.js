const xor = (...arrays) => {
  let res = [];

  for (let i = 0; i < arrays.length; i++) {
    elementLoop: for (let j = 0; j < arrays[i].length; j++) {
      let element = arrays[i][j];

      for (let k = 0; k < arrays.length; k++) {
        if (k !== i) {
          if (arrays[k].indexOf(element) !== -1) {
            continue elementLoop;
          }
        }
      }

      res.push(element);
    }
  }

  return res;
};
// console.log(xor([2, 1], [2, 3]));
